import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import reducer from "./redux/reducers/reducer.js";
import {Operation as DataOperation} from "./redux/reducers/data/data.js";
import {Creator} from "./redux/reducers/data/actions.js";
import {Creator as UserCreator} from "./redux/reducers/user/actions.js";
import {Operation as UserOperation, AuthorizationStatus} from "./redux/reducers/user/user.js";

import {createAPI} from "./api.js";
import App from "./components/app/app.jsx";

const api = createAPI(() => {
  store.dispatch(UserCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

const init = () => {

  return Promise.all([
    store.dispatch(DataOperation.loadPromoFilm()),
    store.dispatch(DataOperation.loadFilms())
  ])
    .then(() => {
      store.dispatch(Creator.setAppLoadingStatus(false));
      store.dispatch(UserOperation.checkAuth());
    }).catch((err) => {
      throw err;
    });
};

init();

const root = document.querySelector(`#root`);


ReactDOM.render(
    <Provider store = {store}>
      <App/>
    </Provider>,
    root
);

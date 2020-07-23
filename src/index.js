import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducer from "./redux/reducers/reducer.js";
import {requireAuthorization} from "./redux/actions.js";
import {Operation as DataOperation} from "./redux/reducers/data/data.js";
import {Operation as UserOperation, AuthorizationStatus} from "./redux/reducers/user/user.js";

import {createAPI} from "./api.js";

const api = createAPI(() => {
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadPromoFilm());
store.dispatch(UserOperation.checkAuth());

const root = document.querySelector(`#root`);

ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    root
);

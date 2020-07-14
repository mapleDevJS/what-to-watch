import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {PROMO_FILM} from "./mocks/films.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./redux/reducer.js";
import {View} from "./components/app/app.jsx";
import {films} from "./mocks/films.js";
import {getUniqueGenres} from "./utils/utils.js";
import {FILTER} from "./consts.js";

const initialState = {
  view: View.LIST,
  activeFilter: FILTER.ALL,
  activeFilm: PROMO_FILM,
  shownFilms: 8,
  films,
  filteredFilms: films,
  filters: getUniqueGenres(films)
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = document.querySelector(`#root`);

ReactDOM.render(
    <Provider store ={store}>
      <App
        PROMO_FILM = {PROMO_FILM}
      />
    </Provider>,
    root
);

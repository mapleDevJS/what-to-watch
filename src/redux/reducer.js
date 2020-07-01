import films from "../mocks/films.js";
import {Action} from "./actions.js";
import {View} from "../components/app/app.jsx";


const initialState = {
  view: View.LIST,
  activeFilter: `All genres`,
  activeFilm: null,
  shownFilms: 8,
  films
};


export const getFilmsByFilter = (filter) => {
  if (filter === `All genres`) {
    return films;
  } else {
    return films.filter((film) => film.genre === filter);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_FILTER:
      const filter = action.payload;

      return Object.assign({}, state, {
        activeFilter: filter,
        films: getFilmsByFilter(filter),
      });

    case Action.CHANGE_VIEW:
      return Object.assign({}, state, {
        view: View.DETAILS,
        activeFilm: action.payload
      });

    case Action.RENDER_FILMS:
      return Object.assign({}, state, {
        shownFilms: state.shownFilms + 8
      });


    default:
      return state;
  }
};

export {reducer};

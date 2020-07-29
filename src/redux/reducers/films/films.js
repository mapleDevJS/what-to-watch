
import {Action} from "../../actions.js";
// import {View} from "../../../components/app/app.jsx";
import {FILTER} from "../../../consts.js";

// import {getPromoFilm, getFilms} from "../data/selectors.js";

const initialState = {
  // view: View.LIST,
  shownFilms: 8,
  activeFilter: FILTER.ALL,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_FILTER:
      const filter = action.payload;

      return Object.assign({}, state, {
        activeFilter: filter,
        shownFilms: 8
      });

      // case Action.CHANGE_VIEW:
      //   return Object.assign({}, state, {
      //     view: View.DETAILS,
      //     activeFilm: action.payload
      //   });

      // case Action.CHANGE_VIEW_TO_SIGN_IN:
      //   return Object.assign({}, state, {
      //     view: View.SIGN_IN,
      //   });

    case Action.RENDER_FILMS:
      return Object.assign({}, state, {
        shownFilms: state.shownFilms + 8
      });

      // case Action.PLAY_VIDEO:
      //   return Object.assign({}, state, {
      //     view: View.VIDEO
      //   });

      // case Action.EXIT_VIDEO:
      //   return Object.assign({}, state, {
      //     view: View.LIST
      //   });

    default:
      return state;
  }
};

export {reducer};

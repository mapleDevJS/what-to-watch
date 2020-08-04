
import {Action} from "../../actions.js";
import {FILTER} from "../../../consts.js";

const initialState = {
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

    case Action.RENDER_FILMS:
      return Object.assign({}, state, {
        shownFilms: state.shownFilms + 8
      });

    default:
      return state;
  }
};

export {reducer};


import {Action} from "./actions";
import {ALL_GENRES} from "../../../consts";

const FilmsCount = {
  ON_START: 8,
  SHOW_MORE: 8
};

const initialState = {
  shownFilms: FilmsCount.ON_START,
  activeFilter: ALL_GENRES,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_FILTER:
      const filter = action.payload;

      return Object.assign({}, state, {
        activeFilter: filter,
        shownFilms: FilmsCount.ON_START
      });

    case Action.SHOW_MORE:
      return Object.assign({}, state, {
        shownFilms: state.shownFilms + FilmsCount.SHOW_MORE
      });

    default:
      return state;
  }
};

export {reducer};

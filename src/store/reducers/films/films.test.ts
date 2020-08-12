import {reducer} from "./films";
import {Action} from "./actions";

const initialState = {
  shownFilms: 8,
  activeFilter: `All genres`,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(initialState, {})).toEqual({
    shownFilms: 8,
    activeFilter: `All genres`,
  });
});

it(`Reducer should change filter to "Comedy"`, () => {
  expect(reducer(initialState, {
    type: Action.CHANGE_FILTER,
    payload: `Comedy`,
  })).toEqual({
    activeFilter: `Comedy`,
    shownFilms: 8,
  });
});

it(`Reducer should change filter to "Drama"`, () => {
  expect(reducer(initialState, {
    type: Action.CHANGE_FILTER,
    payload: `Drama`,
  })).toEqual({
    activeFilter: `Drama`,
    shownFilms: 8,
  });
});

it(`Reducer should change filter`, () => {
  expect(reducer(initialState, {
    type: void 0,
    payload: `Comedy`,
  })).toEqual(initialState);
});

it(`Reducer should render more films`, () => {
  expect(reducer(initialState, {
    type: Action.SHOW_MORE,
  })).toEqual({
    activeFilter: `All genres`,
    shownFilms: 16,
  });
});

it(`Reducer should render more films`, () => {
  expect(reducer({
    activeFilter: `All genres`,
    shownFilms: 16,
  }, {
    type: Action.SHOW_MORE,
  })).toEqual({
    activeFilter: `All genres`,
    shownFilms: 24,
  });
});

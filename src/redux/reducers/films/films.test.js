import {reducer} from "./films.js";
import {Action} from "../../actions.js";
import {film} from "../../../mocks/films.js";

const initialState = {
  view: `List`,
  shownFilms: 8,
  activeFilter: `All genres`,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(initialState, {})).toEqual({
    view: `List`,
    shownFilms: 8,
    activeFilter: `All genres`,
  });
});

it(`Reducer should change view to details and add activeFilm`, () => {
  expect(reducer(initialState, {
    type: Action.CHANGE_VIEW,
    payload: film,
  })).toEqual({
    view: `Details`,
    shownFilms: 8,
    activeFilter: `All genres`,
    activeFilm: film
  });
});

it(`Reducer should change filter to "Comedy"`, () => {
  expect(reducer(initialState, {
    type: Action.CHANGE_FILTER,
    payload: `Comedy`,
  })).toEqual({
    view: `List`,
    activeFilter: `Comedy`,
    shownFilms: 8,
  });
});

it(`Reducer should change filter to "Drama"`, () => {
  expect(reducer(initialState, {
    type: Action.CHANGE_FILTER,
    payload: `Drama`,
  })).toEqual({
    view: `List`,
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
    type: Action.RENDER_FILMS,
  })).toEqual({
    view: `List`,
    activeFilter: `All genres`,
    shownFilms: 16,
  });
});

it(`Reducer should render more films`, () => {
  expect(reducer({
    view: `List`,
    activeFilter: `All genres`,
    shownFilms: 16,
  }, {
    type: Action.RENDER_FILMS,
  })).toEqual({
    view: `List`,
    activeFilter: `All genres`,
    shownFilms: 24,
  });
});

it(`Reducer should play video`, () => {
  expect(reducer({
    view: `List`,
    activeFilter: `All genres`,
    shownFilms: 16,
  }, {
    type: Action.PLAY_VIDEO,
  })).toEqual({
    view: `Video`,
    activeFilter: `All genres`,
    shownFilms: 16,
  });
});

it(`Reducer should exit video`, () => {
  expect(reducer({
    view: `Video`,
    activeFilter: `All genres`,
    shownFilms: 24,
  }, {
    type: Action.EXIT_VIDEO,
  })).toEqual({
    view: `List`,
    activeFilter: `All genres`,
    shownFilms: 24,
  });
});

import {reducer, getFilmsByFilter} from "./reducer.js";
import {Action} from "./actions.js";

// import {reducer, ActionCreator, ActionType} from "./reducer.js";


const films = [
  {
    id: `lKFDHkhaeud`,
    background: `bg-the-grand-budapest-hotel.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Drama`,
    releaseDate: 2020,
    bigPoster: `the-grand-budapest-hotel-poster.jpg`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 8.9,
    level: `Very Good`,
    totalRatings: 240,
    director: `Wes Andreson`,
    starring: [
      `Bill Murray`,
      `Edward Norton`,
      `Jude Law`,
      `Willem Dafoe`
    ]
  },
  {
    id: `lKFDHkhaeud`,
    background: `bg-the-grand-budapest-hotel.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Comedy`,
    releaseDate: 2020,
    bigPoster: `the-grand-budapest-hotel-poster.jpg`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 8.9,
    level: `Very Good`,
    totalRatings: 240,
    director: `Wes Andreson`,
    starring: [
      `Bill Murray`,
      `Edward Norton`,
      `Jude Law`,
      `Willem Dafoe`
    ]
  }
];

const film = {
  id: `lKFDHkhaeud`,
  background: `bg-the-grand-budapest-hotel.jpg`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Drama`,
  releaseDate: 2020,
  bigPoster: `the-grand-budapest-hotel-poster.jpg`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  rating: 8.9,
  level: `Very Good`,
  totalRatings: 240,
  director: `Wes Andreson`,
  starring: [
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`
  ]
};

const initialState = {
  view: `list`,
  activeFilter: `All genres`,
  activeFilm: null,
  show: 8,
  films
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(initialState, {})).toEqual({
    view: `list`,
    activeFilter: `All genres`,
    activeFilm: null,
    show: 8,
    films
  });
});

it(`Reducer should change view and add activeFIlm`, () => {
  expect(reducer(initialState, {
    type: Action.CHANGE_VIEW,
    payload: film,
  })).toEqual({
    view: `details`,
    activeFilter: `All genres`,
    activeFilm: film,
    show: 8,
    films
  });
});

it(`Reducer should change filter`, () => {
  expect(reducer(initialState, {
    type: Action.CHANGE_FILTER,
    payload: `Comedy`,
  })).toEqual({
    view: `list`,
    activeFilter: `Comedy`,
    activeFilm: null,
    show: 8,
    films: getFilmsByFilter(`Comedy`)
  });
});

it(`Reducer should change filter`, () => {
  expect(reducer(initialState, {
    type: Action.CHANGE_FILTER,
    payload: `Comedy`,
  })).toEqual({
    view: `list`,
    activeFilter: `Comedy`,
    activeFilm: null,
    show: 8,
    films: getFilmsByFilter(`Comedy`)
  });
});

it(`Reducer should change filter`, () => {
  expect(reducer(initialState, {
    type: void 0,
    payload: `Comedy`,
  })).toEqual(initialState);
});
import {reducer, Operation} from "./data.js";
import {Action} from "../../actions.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../api.js";
import {emptyFilm, promoFilm, films} from "../../../mocks/films.js";
import filmAdapter from "../../../components/adapters/film-adapter.js";

const api = createAPI(() => {});

describe(`Operations Data`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: Action.LOAD_FILMS,
          payload: [filmAdapter({fake: true})],
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = Operation.loadPromoFilm();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: Action.LOAD_PROMO_FILM,
          payload: filmAdapter({fake: true}),
        });
      });
  });
});

describe(`Reducer Data`, () => {
  it(`Should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      films: [],
      promoFilm: emptyFilm,
      activeFilm: emptyFilm,
    });
  });

  it(`Should update films by load`, () => {
    expect(reducer({
      films: [],
    }, {
      type: Action.LOAD_FILMS,
      payload: films
    })).toEqual({
      films,
    });
  });

  it(`Should update promo film by load`, () => {
    expect(reducer({
      promoFilm: emptyFilm
    }, {
      type: Action.LOAD_PROMO_FILM,
      payload: promoFilm
    })).toEqual({
      promoFilm,
    });
  });

  it(`Should update active film by load`, () => {
    expect(reducer({
      activeFilm: emptyFilm
    }, {
      type: Action.SET_ACTIVE_FILM,
      payload: promoFilm
    })).toEqual({
      activeFilm: promoFilm,
    });
  });
});

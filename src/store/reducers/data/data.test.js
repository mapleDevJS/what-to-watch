import {reducer, Operation} from "./data.js";
import {Action} from "./actions.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../api.js";

import {film, films, favoriteFilm, nonFavoriteFilm} from "../../../test-data/films.js";
import {comments} from "../../../test-data/comments.js";
import Film from "../../../components/adapters/film.js";
import Comment from "../../../components/adapters/comment.js";

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
          payload: [Film.parse({fake: true})],
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
          payload: Film.parse({fake: true}),
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFavoriteFilms();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: Action.SET_APP_LOADING_STATUS,
          payload: true,
        });

        expect(dispatch).toHaveBeenCalledWith({
          type: Action.LOAD_FAVORITE_FILMS,
          payload: [Film.parse({fake: true})],
        });
      });
  });

  it(`Should make a correct API call to /comments/20`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = Operation.loadComments(20);

    apiMock
      .onGet(`/comments/20`)
      .reply(200, [{fake: true}]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: Action.LOAD_COMMENTS,
          payload: [Comment.parse([{fake: true}])],
        });
      });
  });

  it(`Should post review to /comments/12`, () => {
    const review = {
      rating: 3,
      comment: `Text`,
    };

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postingReview = Operation.postFilmReview(12, review);

    apiMock
      .onPost(`/comments/12`)
      .reply(200, [{fake: true}]);

    return postingReview(dispatch, () => {}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledWith({
              type: Action.SET_APP_ERROR_STATUS,
              payload: false,
            });

            expect(dispatch).toHaveBeenCalledWith({
              type: Action.SET_APP_LOADING_STATUS,
              payload: false,
            });

          });
  });

  it(`Should post favorite film status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postingFavoriteStatus = Operation.postFavoriteFilm(nonFavoriteFilm);

    apiMock
      .onPost(`/favorite/${nonFavoriteFilm.id}/1`)
      .reply(200, [{fake: true}]);

    return postingFavoriteStatus(dispatch, ()=>{}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledWith({
              type: Action.ADD_FILM_TO_FAVORITE,
              payload: nonFavoriteFilm,
            });
          });
  });

  it(`Should post non favorite film status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postingFavoriteStatus = Operation.postFavoriteFilm(favoriteFilm);

    apiMock
      .onPost(`/favorite/${favoriteFilm.id}/0`)
      .reply(200, [{fake: true}]);

    return postingFavoriteStatus(dispatch, ()=>{}, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledWith({
              type: Action.REMOVE_FILM_FROM_FAVORITE,
              payload: favoriteFilm,
            });
          });
  });
});

describe(`Reducer Data`, () => {
  it(`Should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      isAppLoading: true,
      isAppError: false,
      films: [],
      promoFilm: {},
      favoriteFilms: [],
      comments: [],
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
      promoFilm: {}
    }, {
      type: Action.LOAD_PROMO_FILM,
      payload: film
    })).toEqual({
      promoFilm: film,
    });
  });

  it(`Should update favorite films by load`, () => {
    expect(reducer({
      favoriteFilms: []
    }, {
      type: Action.LOAD_FAVORITE_FILMS,
      payload: films
    })).toEqual({
      favoriteFilms: films,
    });
  });

  it(`Should update comments by load`, () => {
    expect(reducer({
      comments: []
    }, {
      type: Action.LOAD_COMMENTS,
      payload: comments
    })).toEqual({
      comments,
    });
  });

  it(`Should update app loading by load`, () => {
    expect(reducer({
      isAppLoading: true
    }, {
      type: Action.SET_APP_LOADING_STATUS,
      payload: false
    })).toEqual({
      isAppLoading: false
    });
  });

  it(`Should add film to favorite`, () => {
    expect(reducer({
      films: [nonFavoriteFilm],
      promoFilm: [nonFavoriteFilm],
      favoriteFilms: []
    }, {
      type: Action.ADD_FILM_TO_FAVORITE,
      payload: favoriteFilm
    })).toEqual({
      films: [nonFavoriteFilm],
      promoFilm: [nonFavoriteFilm],
      favoriteFilms: [favoriteFilm]
    });
  });

  it(`Should renove film from favorite`, () => {
    expect(reducer({
      films: [favoriteFilm],
      promoFilm: [favoriteFilm],
      favoriteFilms: []
    }, {
      type: Action.ADD_FILM_TO_FAVORITE,
      payload: nonFavoriteFilm
    })).toEqual({
      films: [favoriteFilm],
      promoFilm: [favoriteFilm],
      favoriteFilms: [nonFavoriteFilm]
    });
  });
});

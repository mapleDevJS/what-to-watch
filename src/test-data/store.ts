import NameSpace from "../store/reducers/name-space";
import {promoFilm, films} from "../test-data/films";
import {user} from "../test-data/user";

export const testStore = {
  [NameSpace.DATA]: {
    isAppLoading: true,
    isAppError: false,
    films,
    promoFilm,
    favoriteFilms: [],
    comments: []
  },
  [NameSpace.FILMS]: {
    shownFilms: 8,
    activeFilter: `All genres`,
  },
  [NameSpace.USER]: {
    error: null,
    authorizationStatus: `No auth`,
    authorizationError: false,
    user
  },
};


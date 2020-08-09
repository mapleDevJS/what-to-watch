import NameSpace from "../store/reducers/name-space.js";
import {promoFilm, films} from "../test-data/films.js";
import {user} from "../test-data/user.js";

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


import React from "react";
import renderer from "react-test-renderer";

import {Provider} from "react-redux";

import configureStore from "redux-mock-store";
import NameSpace from "../../../redux/reducers/name-space.js";

import Reviews from "./reviews.jsx";

// import {film} from "../../../mocks/films.js";
import {promoFilm, films} from "../../../mocks/films.js";

const mockStore = configureStore([]);

const store = mockStore({
  [NameSpace.DATA]: {
    isAppLoading: true,
    favoriteFilms: [],
    films,
    promoFilm
  },
  [NameSpace.FILMS]: {
    shownFilms: 8,
    activeFilter: `All genres`,
  },
  [NameSpace.USER]: {
    authorizationStatus: `No auth`,
    authorizationError: false,
    user: {}
  },
});

it(`Should tab reviews render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Reviews />
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

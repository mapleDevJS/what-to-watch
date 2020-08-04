import React from "react";
import renderer from "react-test-renderer";

import {Provider} from "react-redux";

import configureStore from "redux-mock-store";

import App from "./app.jsx";

import NameSpace from "../../redux/reducers/name-space.js";
import {promoFilm, films} from "../../mocks/films.js";

const mockStore = configureStore([]);

it(`Render App`, () => {
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

  const tree = renderer
    .create(
        <Provider store = {store}>
          <App/>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

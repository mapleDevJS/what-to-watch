import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import NameSpace from "../../redux/reducers/name-space.js";
import {promoFilm, films} from "../../mocks/films.js";

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films,
      promoFilm,
      activeFilm: promoFilm
    },
    [NameSpace.FILMS]: {
      view: `List`,
      shownFilms: 8,
      activeFilter: `All genres`,
    },
    [NameSpace.USER]: {
      authorizationStatus: `No auth`,
      authorizationError: false
    },
  });

  const tree = renderer
    .create(
        <Provider store = {store}>
          <App />
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

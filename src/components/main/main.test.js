import React from "react";

import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";

import configureStore from 'redux-mock-store';

import Main from "./main.jsx";
import history from "../../history.js";

import {promoFilm, films} from "../../test-data/films.js";
import {testStore} from "../../test-data/store.js";

const mockStore = configureStore([]);
const store = mockStore(testStore);

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store = {store}>
          <Router history={history}>
            <Main
              films = {films}
              promoFilm = {promoFilm}
              shownFilms = {8}
              onShowMoreClick = {() => {}}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

import * as React from "react";

import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import * as renderer from "react-test-renderer";

import configureStore from 'redux-mock-store';

import {noop} from "../../utils/utils";

import Main from "./main";
import history from "../../history";

import {promoFilm, films} from "../../test-data/films";
import {testStore} from "../../test-data/store";

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
              onShowMoreClick = {noop}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

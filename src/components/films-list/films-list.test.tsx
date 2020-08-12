import * as React from "react";
import {Router} from "react-router-dom";
import * as renderer from "react-test-renderer";

import {Provider} from 'react-redux';

import configureStore from 'redux-mock-store';

import FilmsList from "./films-list";
import history from "../../history";

import {testStore} from "../../test-data/store";
import {films} from "../../test-data/films";

const mockStore = configureStore([]);
const store = mockStore(testStore);

it(`Should FilmsList render corretly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <FilmsList
              films = {films}
            />
          </Router>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

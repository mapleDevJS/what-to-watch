import * as React from "react";
import {Router} from "react-router-dom";
import * as renderer from "react-test-renderer";

import {Provider} from 'react-redux';

import configureStore from 'redux-mock-store';

import FilmCard from "./film-card";
import history from "../../history";

import {testStore} from "../../test-data/store";
import {film} from "../../test-data/films";

import {noop} from "../../utils/utils";

const mockStore = configureStore([]);
const store = mockStore(testStore);

it(`Render FilmCard`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <FilmCard
              film = {film}
              isPlaying = {true}
              setPlayingFilm = {noop}
            />
          </Router>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

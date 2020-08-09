import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";

import {Provider} from 'react-redux';

import configureStore from 'redux-mock-store';

import FilmCard from "./film-card.jsx";
import history from "../../history.js";

import {testStore} from "../../test-data/store.js";
import {film} from "../../test-data/films.js";

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
              setPlayingFilm = {() => {}}
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

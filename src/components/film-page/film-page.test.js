import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";

import {Provider} from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import FilmPage from "./film-page.jsx";
import history from "../../history.js";

import {api} from "../../test-data/api.js";
import {testStore} from "../../test-data/store.js";
import {film, films} from "../../test-data/films.js";
import {comments} from "../../test-data/comments.js";

const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);
const store = mockStore(testStore);


it(`Should FilmPage render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store = {store}>
          <Router history={history}>
            <FilmPage
              film = {film}
              films={films}
              comments={comments}
              isUserAuthorized={false}
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

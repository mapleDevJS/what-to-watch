import React from "react";
import {Router} from "react-router-dom";

import renderer from "react-test-renderer";
import FilmPage from "./film-page.jsx";
import history from "../../history.js";

import {film} from "../../mocks/films.js";


it(`Render FilmPage`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <FilmPage
            film = {film}
            onPlayClick = {() => {}}
          />

        </Router>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

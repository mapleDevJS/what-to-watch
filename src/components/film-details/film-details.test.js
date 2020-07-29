import React from "react";
import {Router} from "react-router-dom";

import renderer from "react-test-renderer";
import FilmDetails from "./film-details.jsx";
import history from "../../history.js";

import {film} from "../../mocks/films.js";


it(`Render FilmDetails`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <FilmDetails
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

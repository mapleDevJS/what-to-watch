import React from "react";
import {Router} from "react-router-dom";

import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";
import history from "../../history.js";

import {films} from "../../mocks/films.js";

it(`Render FilmsList`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <FilmsList
            films = {films}
            onTitleClick = {() => {}}
            onPosterClick = {() => {}}
          />
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

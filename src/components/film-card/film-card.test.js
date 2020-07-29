import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";

import FilmCard from "./film-card.jsx";
import {film} from "../../mocks/films.js";
import history from "../../history.js";

it(`Render FilmCard`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <FilmCard
            film = {film}
            onTitleClick = {() => {}}
            onPosterClick = {() => {}}
            isPlaying = {true}
            setPlayingFilm = {() => {}}
          />
        </Router>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

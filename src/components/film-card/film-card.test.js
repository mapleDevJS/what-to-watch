import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

import {film} from "../../mocks/films.js";

it(`Render FilmCard`, () => {
  const tree = renderer
    .create(<FilmCard
      film = {film}
      onTitleClick = {() => {}}
      onPosterClick = {() => {}}
      isPlaying = {true}
      setPlayingFilm = {() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const film = {
  title: `Tenet`,
  preview: `orlando.jpg`
};

it(`Render FilmCard`, () => {
  const tree = renderer
    .create(<FilmCard
      film = {film}
      onFilmCardHover = {() => {}}
      onTitleClick = {() => {}}
      onPosterClick = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

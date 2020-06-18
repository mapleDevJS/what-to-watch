import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const film = {
  id: `JH6DHkbdmc`,
  title: `Tenet`,
  poster: `orlando.jpg`
};

it(`Render FilmCard`, () => {
  const tree = renderer
    .create(<FilmCard
      film = {film}
      onFilmCardHover = {() => {}}
      onTitleClick = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

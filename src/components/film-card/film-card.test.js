import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const film = {
  id: `lKFDHkhaeud`,
  background: `bg-the-grand-budapest-hotel.jpg`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Drama`,
  releaseDate: 2020,
  bigPoster: `the-grand-budapest-hotel-poster.jpg`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  rating: 8.9,
  level: `Very Good`,
  totalRatings: 240,
  director: `Wes Andreson`,
  starring: [
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`
  ]
};

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

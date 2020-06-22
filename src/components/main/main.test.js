import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const TOP_FILM = {
  title: `The Grand Budapest Hotel`,
  poster: `bg-the-grand-budapest-hotel.jpg`,
  genre: `Drama`,
  releaseDate: 2014
};

const films = [
  {
    id: `lKFDHkhaeud`,
    background: `bg-the-grand-budapest-hotel.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Drama`,
    releaseDate: 2020,
    poster: `the-grand-budapest-hotel-poster.jpg`,
    preview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
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
  }
];

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      TOP_FILM = {TOP_FILM}
      films = {films}
      onTitleClick = {() => {}}
      onPosterClick = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

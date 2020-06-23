import React from "react";
import renderer from "react-test-renderer";
import FilmDetails from "./film-details.jsx";

const film = {
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
};

it(`Render FilmDetails`, () => {
  const tree = renderer
    .create(<FilmDetails
      film = {film}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

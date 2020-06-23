import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";


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

it(`Render FilmsList`, () => {
  const tree = renderer
    .create(<FilmsList
      films = {films}
      onTitleClick = {() => {}}
      onPosterClick = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

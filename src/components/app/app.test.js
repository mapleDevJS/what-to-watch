import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const topFilm = {
  title: `The Grand Budapest Hotel`,
  poster: `bg-the-grand-budapest-hotel.jpg`,
  genre: `Drama`,
  releaseDate: 2014
};

const films = [
  {
    id: `lKFDHkhaeud`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }, {
    id: `ksbadfjb7dh`,
    title: ``,
    poster: `bohemian-rhapsody.jpg`
  }, {
    id: `kBkfhdkfo*`,
    title: `Macbeth`,
    poster: ``
  }, {
    id: ``,
    title: `Macbeth`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }
];


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      topFilm = {topFilm}
      films = {films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
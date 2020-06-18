import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";


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

it(`Render FilmsList`, () => {
  const tree = renderer
    .create(<FilmsList
      films = {films}
      onTitleClick = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

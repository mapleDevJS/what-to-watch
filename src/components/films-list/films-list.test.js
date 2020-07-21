import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

import {films} from "../../mocks/films.js";

it(`Render FilmsList`, () => {
  const tree = renderer
    .create(<FilmsList
      films = {films}
      onTitleClick = {() => {}}
      onPosterClick = {() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});

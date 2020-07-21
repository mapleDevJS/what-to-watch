import React from "react";
import renderer from "react-test-renderer";
import FilmDetails from "./film-details.jsx";

import {film} from "../../mocks/films.js";


it(`Render FilmDetails`, () => {
  const tree = renderer
    .create(<FilmDetails
      film = {film}
      onPlayClick = {() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});

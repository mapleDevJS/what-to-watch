import React from "react";
import renderer from "react-test-renderer";
import Movie from "./movie.jsx";

it(`Render App`, () => {
  const tree = renderer
    .create(<Movie
      title = {`Tenet`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

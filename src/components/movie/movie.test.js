import React from "react";
import renderer from "react-test-renderer";
import Movie from "./movie.jsx";

it(`Render Movie`, () => {
  const tree = renderer
    .create(<Movie
      title = {`Tenet`}
      onTitleClickHandler = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

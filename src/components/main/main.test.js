import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Render App`, () => {
  const tree = renderer
    .create(<Main
      movie = {{
        title: `Bad Boys for Life`,
        genre: `Crime`,
        releaseDate: 2020
      }}
      moviesTitles = {[
        `Emma`,
        `No Time to Die`,
        `Wonder Woman 1984`
      ]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

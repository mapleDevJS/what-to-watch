import React from "react";
import renderer from "react-test-renderer";
import Overview from "./overview.jsx";

import {film} from "../../../test-data/films.js";

it(`Should Overview tab render correctly`, () => {
  const tree = renderer
    .create(
        <Overview film={film}/>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

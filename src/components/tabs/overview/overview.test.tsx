import * as React from "react";
import * as renderer from "react-test-renderer";
import Overview from "./overview";

import {film} from "../../../test-data/films";

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

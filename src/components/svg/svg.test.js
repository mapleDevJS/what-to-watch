import React from "react";
import renderer from "react-test-renderer";
import Svg from "./svg.jsx";

it(`Should "Svg" render correctly`, () => {
  const tree = renderer
    .create(
        <Svg />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

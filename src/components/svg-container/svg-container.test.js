import React from "react";
import renderer from "react-test-renderer";
import SvgContainer from "./svg-container.jsx";

it(`Should SvgContainer render correctly`, () => {
  const tree = renderer
    .create(
        <SvgContainer/>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

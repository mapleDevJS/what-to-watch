import * as React from "react";
import * as renderer from "react-test-renderer";
import SvgContainer from "./svg-container";

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

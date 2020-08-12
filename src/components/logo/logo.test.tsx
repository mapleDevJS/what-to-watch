import * as React from "react";
import * as renderer from "react-test-renderer";
import Logo from "./logo";

it(`Should "Logo" render correctly`, () => {
  const tree = renderer
    .create(
        <Logo />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

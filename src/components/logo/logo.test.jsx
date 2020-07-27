import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo.jsx";

it(`Should header render correctly`, () => {
  const tree = renderer
    .create(
        <Logo />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

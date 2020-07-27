import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";

it(`Should button "SignIn" render correctly`, () => {
  const tree = renderer
    .create(
        <SignIn
          authorizationError = {false}
          onSubmit={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

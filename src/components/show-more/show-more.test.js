import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "./show-more.jsx";

it(`Should button "Show more" render correctly`, () => {
  const tree = renderer
    .create(
        <ShowMore
          onShowMoreClick = {() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

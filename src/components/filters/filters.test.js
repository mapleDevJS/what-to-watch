import React from "react";
import renderer from "react-test-renderer";
import Filters from "./filters.jsx";

it(`Render Filters`, () => {
  const tree = renderer
    .create(<Filters
      activeFilter = {``}
      onFilterChange = {() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});

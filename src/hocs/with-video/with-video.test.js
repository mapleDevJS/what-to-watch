import React from "react";
import renderer from "react-test-renderer";
import withVideo from "./with-video.js";

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withVideo(MockComponent);

it(`withVideo is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      film = {{}}
      onTitleClick = {() => {}}
      onPosterClick = {() => {}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});

import * as React from "react";
import * as renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

import {film} from "../../test-data/films";


it(`VideoPlayer is rendered correctly`, () => {
  const tree = renderer.create(<VideoPlayer
    isPlaying = {true}
    film = {film}
    isMuted = {true}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});

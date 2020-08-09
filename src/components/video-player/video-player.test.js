import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from "./video-player.jsx";

import {film} from "../../test-data/films.js";


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

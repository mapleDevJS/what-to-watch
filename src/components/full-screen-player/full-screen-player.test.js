import React from "react";
import {Router} from "react-router-dom";

import renderer from "react-test-renderer";
import FullScreenPlayer from "./full-screen-player.jsx";
import history from "../../history.js";

import {film} from "../../test-data/films.js";

it(`Render FullScreenPlayer`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <FullScreenPlayer
            film = {film}
            progress={0}
            duration={0}
            isPlaying={false}
            playbackToggle={() => {}}
            onFullScreenClick={() => {}}
            onExitClick={() => {}}>
            <video/>
          </FullScreenPlayer>
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

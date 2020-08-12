import * as React from "react";
import {Router} from "react-router-dom";

import * as renderer from "react-test-renderer";
import FullScreenPlayer from "./full-screen-player";
import history from "../../history";

import {film} from "../../test-data/films";

import {noop} from "../../utils/utils";

it(`Render FullScreenPlayer`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <FullScreenPlayer
            film = {film}
            progress={0}
            duration={0}
            isPlaying={false}
            playbackToggle={noop}
            onFullScreenClick={noop}
            onExitClick={noop}>
            <video/>
          </FullScreenPlayer>
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

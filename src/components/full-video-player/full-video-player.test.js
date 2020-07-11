import React from "react";
import renderer from "react-test-renderer";
import FullVideoPlayer from "./full-video-player.jsx";

it(`Render FullVideoPlayer`, () => {
  const tree = renderer
    .create(
        <FullVideoPlayer
          title={`The Rock`}
          progress={0}
          duration={0}
          isPlaying={false}
          time={``}
          playbackToggle={() => {}}
          onFullScreenClick={() => {}}
          onExitClick={() => {}}>
          <video/>
        </FullVideoPlayer>).toJSON();

  expect(tree).toMatchSnapshot();
});

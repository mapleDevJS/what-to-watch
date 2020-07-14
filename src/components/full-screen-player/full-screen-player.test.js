import React from "react";
import renderer from "react-test-renderer";
import FullScreenPlayer from "./full-screen-player.jsx";

it(`Render FullScreenPlayer`, () => {
  const tree = renderer
    .create(
        <FullScreenPlayer
          title={`The Rock`}
          progress={0}
          duration={0}
          isPlaying={false}
          time={``}
          playbackToggle={() => {}}
          onFullScreenClick={() => {}}
          onExitClick={() => {}}>
          <video/>
        </FullScreenPlayer>).toJSON();

  expect(tree).toMatchSnapshot();
});

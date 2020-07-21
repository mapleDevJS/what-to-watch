import React from "react";
import renderer from "react-test-renderer";
import withFullVideo from "./with-full-video.js";
import PropTypes from "prop-types";
import {film} from "../../../mocks/films.js";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withFullVideo(MockComponent);

it(`WithFullVideo is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      film={film}
      onExitClick = {() => {}}
    />
  ), {
    createNodeMock(element) {
      if (element.type === `video`) {
        return {
          play: () => {}
        };
      }
      return null;
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});

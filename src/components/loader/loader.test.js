import React from "react";
import {Router} from "react-router-dom";

import renderer from "react-test-renderer";
import Loader from "./loader.jsx";
import history from "../../history.js";

it(`Should Loader render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Loader/>
        </Router>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

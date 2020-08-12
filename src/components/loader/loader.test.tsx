import * as React from "react";
import {Router} from "react-router-dom";

import * as renderer from "react-test-renderer";
import Loader from "./loader";
import history from "../../history";

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

import * as React from "react";
import {Router} from "react-router-dom";

import * as renderer from "react-test-renderer";
import Footer from "./footer";
import history from "../../history";

it(`Should Footer render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Footer/>
        </Router>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

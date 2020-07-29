import React from "react";
import {Router} from "react-router-dom";

import renderer from "react-test-renderer";
import Footer from "./footer.jsx";
import history from "../../history.js";

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

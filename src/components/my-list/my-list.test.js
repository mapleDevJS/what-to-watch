import React from "react";
import {Router} from "react-router-dom";

import renderer from "react-test-renderer";
import MyList from "./my-list.jsx";
import history from "../../history.js";


it(`Should MyList render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <MyList
            authorizationStatus={false}
          />
        </Router>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

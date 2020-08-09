import React from "react";
import {Router} from "react-router-dom";

import {Provider} from "react-redux";

import configureStore from "redux-mock-store";

import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import history from "../../history.js";

import {testStore} from "../../test-data/store.js";

const mockStore = configureStore([]);
const store = mockStore(testStore);

it(`Should button "SignIn" render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <SignIn
              authorizationError = {false}
            />
          </Router>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

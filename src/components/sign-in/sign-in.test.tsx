import * as React from "react";
import {Router} from "react-router-dom";

import {Provider} from "react-redux";

import configureStore from "redux-mock-store";

import * as renderer from "react-test-renderer";
import SignIn from "./sign-in";
import history from "../../history";

import {testStore} from "../../test-data/store";

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

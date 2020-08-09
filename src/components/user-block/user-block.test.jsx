import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";

import {Provider} from "react-redux";

import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import history from "../../history.js";

import {testStore} from "../../test-data/store.js";
import UserBlock from "./user-block.jsx";
import {api} from "../../test-data/api.js";
import {user} from "../../test-data/user.js";

const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);
const store = mockStore(testStore);

it(`Should UserBlock render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <UserBlock
              authorizationStatus = {`No auth`}
              user = {user}
            />
          </Provider>
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

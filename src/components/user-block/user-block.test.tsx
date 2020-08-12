import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";

import {Provider} from "react-redux";

import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

import history from "../../history";

import {testStore} from "../../test-data/store";
import UserBlock from "./user-block";
import {api} from "../../test-data/api";
import {user} from "../../test-data/user";

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

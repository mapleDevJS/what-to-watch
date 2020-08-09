import React from "react";
import renderer from "react-test-renderer";

import {Provider} from "react-redux";

import configureStore from 'redux-mock-store';

import App from "./app.jsx";

import {testStore} from "../../test-data/store.js";

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store = {store}>
          <App/>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

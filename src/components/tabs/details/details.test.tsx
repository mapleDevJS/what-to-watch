import * as React from "react";
import * as renderer from "react-test-renderer";

import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import Details from "./details";

import {testStore} from "../../../test-data/store";

import {film} from "../../../test-data/films";

const mockStore = configureStore([]);
const store = mockStore(testStore);

it(`Should tab details render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Details film = {film}/>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

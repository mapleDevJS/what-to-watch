import * as React from "react";
import * as renderer from "react-test-renderer";

import {Provider} from "react-redux";

import configureStore from "redux-mock-store";

import Reviews from "./reviews";

import {testStore} from "../../../test-data/store";
import {comments} from "../../../test-data/comments";

const mockStore = configureStore([]);

const store = mockStore(testStore);

it(`Should tab reviews render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Reviews comments = {comments}/>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

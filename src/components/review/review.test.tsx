import * as React from "react";
import * as renderer from "react-test-renderer";

import {Provider} from "react-redux";

import configureStore from "redux-mock-store";

import Review from "./review";

import {comment} from "../../test-data/comments";
import {testStore} from "../../test-data/store";

const mockStore = configureStore([]);

const store = mockStore(testStore);

it(`Should review render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Review comment = {comment}/>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

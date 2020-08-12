import * as React from "react";
import {Router} from "react-router-dom";

import {Provider} from "react-redux";

import configureStore from "redux-mock-store";

import * as renderer from "react-test-renderer";
import Tabs from "./tabs";
import history from "../../history";

import {testStore} from "../../test-data/store";

import {film} from "../../test-data/films";
import {comments} from "../../test-data/comments";

import {noop} from "../../utils/utils";

const mockStore = configureStore([]);
const store = mockStore(testStore);

it(`Should button "SignIn" render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Tabs
              film={film}
              comments={comments}
              activeTab={`Overview`}
              onTabClick={noop}
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

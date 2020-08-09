import React from "react";
import {Router} from "react-router-dom";

import {Provider} from "react-redux";

import configureStore from "redux-mock-store";

import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";
import history from "../../history.js";

import {testStore} from "../../test-data/store.js";

import {film} from "../../test-data/films.js";
import {comments} from "../../test-data/comments.js";

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
              onTabClick={()=>{}}
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

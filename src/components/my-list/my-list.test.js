import React from "react";
import {Router} from "react-router-dom";

import {Provider} from "react-redux";
import thunk from "redux-thunk";

import configureStore from "redux-mock-store";

import renderer from "react-test-renderer";
import MyList from "./my-list.jsx";
import history from "../../history.js";

import {testStore} from "../../test-data/store.js";
import {films} from "../../test-data/films.js";
import {api} from "../../test-data/api.js";

const middleware = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middleware);
const store = mockStore(testStore);

it(`Should MyList render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MyList
              isAppLoading={false}
              films={films}
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

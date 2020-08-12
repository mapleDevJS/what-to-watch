import * as React from "react";
import {Router} from "react-router-dom";

import {Provider} from "react-redux";
import thunk from "redux-thunk";

import configureStore from "redux-mock-store";

import * as renderer from "react-test-renderer";
import MyList from "./my-list";
import history from "../../history";

import {testStore} from "../../test-data/store";
import {films} from "../../test-data/films";
import {api} from "../../test-data/api";

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

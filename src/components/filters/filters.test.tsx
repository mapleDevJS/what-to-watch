import * as React from "react";
import {Router} from "react-router-dom";

import {Provider} from "react-redux";

import configureStore from "redux-mock-store";

import * as renderer from "react-test-renderer";
import Filters from "./filters";
import history from "../../history";

import {testStore} from "../../test-data/store";

import {noop} from "../../utils/utils";

const mockStore = configureStore([]);
const store = mockStore(testStore);

it(`Should Filters render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store = {store}>
          <Router history={history}>
            <Filters
              activeFilter = {``}
              onFilterChange = {noop}
              filters = {[`All genres`, `Drama`, `Comedy`]}
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


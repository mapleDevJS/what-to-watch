import * as React from "react";
import * as renderer from "react-test-renderer";

import {Provider} from "react-redux";

import configureStore from "redux-mock-store";

import MyListButton from "./my-list-button";

import {film} from "../../test-data/films";

import {noop} from "../../utils/utils";

const mockStore = configureStore([]);
const store = mockStore({});

it(`Should button ShowMore render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MyListButton
            film = {film}
            onMyListClick={noop}
          />
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

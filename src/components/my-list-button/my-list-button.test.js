import React from "react";
import renderer from "react-test-renderer";

import {Provider} from "react-redux";

import configureStore from "redux-mock-store";

import MyListButton from "./my-list-button.jsx";

import {film} from "../../test-data/films.js";

const mockStore = configureStore([]);
const store = mockStore({});

it(`Should button ShowMore render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MyListButton
            film = {film}
            onMyListClick={()=>{}}
          />
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

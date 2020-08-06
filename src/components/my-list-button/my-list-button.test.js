import React from "react";
import renderer from "react-test-renderer";

import {Provider} from "react-redux";

import configureStore from "redux-mock-store";
// import NameSpace from "../../redux/reducers/name-space.js";

import MyListButton from "./my-list-button.jsx";

import {film} from "../../mocks/films.js";
// import {promoFilm, films} from "../../mocks/films.js";

const mockStore = configureStore([]);

const store = mockStore({});

it(`Should button "renderer" render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MyListButton film = {film}/>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

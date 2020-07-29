import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";

import Main from "./main.jsx";
import history from "../../history.js";

import {promoFilm, films} from "../../mocks/films.js";


it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Main
            authorizationStatus = {`No auth`}
            promoFilm = {promoFilm}
            films = {films}
            onTitleClick = {() => {}}
            onPosterClick = {() => {}}
            activeFilter = {`All genres`}
            onFilterChange = {() => {}}
            onShowMoreClick = {() => {}}
            shownFilms = {8}
            filters = {[`All genres`, `Drama`]}
            onPlayClick = {() => {}}
            onSignInClick = {() => {}}
          />
        </Router>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

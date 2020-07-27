import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

import {promoFilm, films} from "../../mocks/films.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main e2e tests`, () => {
  it(`Should film title be clciked`, () => {
    const onTitleClickHandler = jest.fn();

    const main = shallow(
        <Main
          authorizationStatus = {`No auth`}
          promoFilm = {promoFilm}
          films = {films}
          onTitleClick={onTitleClickHandler}
          onPosterClick={() => {}}
          activeFilter = {`All genres`}
          onFilterChange={() => {}}
          onShowMoreClick = {() => {}}
          shownFilms = {8}
          filters = {[`All genres`, `Drama`]}
          onPlayClick = {() => {}}
          onSignInClick = {() => {}}
        />
    );

    const titles = main.find(`.small-movie-card__link`);
    titles.forEach((title) => title.simulate(`click`));
    expect(onTitleClickHandler).toHaveBeenCalledTimes(titles.length);
  });

  it(`Should film poster be clicked`, () => {
    const onPosterClickHandler = jest.fn();

    const main = shallow(
        <Main
          authorizationStatus = {`No auth`}
          promoFilm = {promoFilm}
          films = {films}
          filters = {[`All genres`, `Drama`]}
          onTitleClick={() => {}}
          onPosterClick={onPosterClickHandler}
          activeFilter = {`All genres`}
          onFilterChange={() => {}}
          onShowMoreClick = {() => {}}
          shownFilms = {8}
          onPlayClick = {() => {}}
          onSignInClick = {() => {}}
        />
    );

    const posters = main.find(`.small-movie-card`);
    posters.forEach((poster) => poster.simulate(`click`));
    expect(onPosterClickHandler).toHaveBeenCalledTimes(posters.length);
  });
});

import React from "react";
import {Router} from "react-router-dom";

import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FilmCard from "./film-card.jsx";
import {film} from "../../mocks/films.js";
import history from "../../history.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FilmCard e2e tests`, () => {
  it(`Should card title be clicked`, () => {
    const onTitleClickHandler = jest.fn();

    const filmCard = mount(
        <Router history={history}>
          <FilmCard
            film={film}
            onTitleClick = {onTitleClickHandler}
            onPosterClick = {() => {}}
            isPlaying = {false}
            setPlayingFilm = {() => {}}
          />
        </Router>
    );

    const mockEvent = {
      preventDefault() {}
    };

    const titles = filmCard.find(`.small-movie-card__link`);
    titles.forEach((title) => title.simulate(`click`, mockEvent));

    expect(onTitleClickHandler).toHaveBeenCalledTimes(3);
    expect(onTitleClickHandler).toHaveBeenCalledWith(film);
  });

  it(`Should card poster be clicked`, () => {
    const onPosterClickHandler = jest.fn();

    const filmCard = mount(
        <Router history={history}>
          <FilmCard
            film = {film}
            onTitleClick = {() => {}}
            onPosterClick = {onPosterClickHandler}
            isPlaying = {false}
            setPlayingFilm = {() => {}}
          />
        </Router>
    );

    const poster = filmCard.find(`.small-movie-card a`);
    poster.at(0).simulate(`click`);

    expect(onPosterClickHandler).toHaveBeenCalledTimes(1);
    expect(onPosterClickHandler).toHaveBeenCalledWith(film);
  });
});

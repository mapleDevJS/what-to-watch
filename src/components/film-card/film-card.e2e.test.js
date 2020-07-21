import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

import {film} from "../../mocks/films.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FilmCard e2e tests`, () => {
  it(`Should card title be clicked`, () => {
    const onTitleClickHandler = jest.fn();

    const filmCard = shallow(
        <FilmCard
          film={film}
          onTitleClick = {onTitleClickHandler}
          onPosterClick = {() => {}}
          isPlaying = {false}
          setPlayingFilm = {() => {}}
        />
    );

    const mockEvent = {
      preventDefault() {}
    };

    const title = filmCard.find(`.small-movie-card__link`);
    title.simulate(`click`, mockEvent);

    expect(onTitleClickHandler).toHaveBeenCalledTimes(1);
    expect(onTitleClickHandler).toHaveBeenCalledWith(film);
  });

  it(`Should card poster be clicked`, () => {
    const onPosterClickHandler = jest.fn();

    const filmCard = shallow(
        <FilmCard
          film = {film}
          onTitleClick = {() => {}}
          onPosterClick = {onPosterClickHandler}
          isPlaying = {false}
          setPlayingFilm = {() => {}}
        />
    );

    const card = filmCard.find(`.small-movie-card`);
    card.simulate(`click`);

    expect(onPosterClickHandler).toHaveBeenCalledTimes(1);
    expect(onPosterClickHandler).toHaveBeenCalledWith(film);
  });
});

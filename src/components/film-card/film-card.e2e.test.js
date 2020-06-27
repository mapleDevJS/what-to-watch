import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

const film = {
  id: `lKFDHkhaeud`,
  background: `bg-the-grand-budapest-hotel.jpg`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Drama`,
  releaseDate: 2020,
  bigPoster: `the-grand-budapest-hotel-poster.jpg`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  rating: 8.9,
  level: `Very Good`,
  totalRatings: 240,
  director: `Wes Andreson`,
  starring: [
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`
  ]
};

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
          onPosterClick={() => {}}
          onCardHover={() => {}}
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
          film={film}
          onTitleClick={() => {}}
          onPosterClick={onPosterClickHandler}
          onCardHover={() => {}}
        />
    );

    const card = filmCard.find(`.small-movie-card`);
    card.simulate(`click`);

    expect(onPosterClickHandler).toHaveBeenCalledTimes(1);
    expect(onPosterClickHandler).toHaveBeenCalledWith(film);
  });

  it(`Should Card be hovered with correct args`, () => {
    const onCardHover = jest.fn();


    const filmCard = shallow(
        <FilmCard
          film={film}
          onTitleClick={() => {}}
          onPosterClick={() => {}}
          onCardHover={onCardHover}
        />
    );

    const card = filmCard.find(`.small-movie-card`);
    card.simulate(`mouseenter`);

    expect(onCardHover).toHaveBeenCalledTimes(1);
    expect(onCardHover).toHaveBeenCalledWith(film);
  });
});

import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

const PROMO_FILM = {
  title: `The Grand Budapest Hotel`,
  poster: `bg-the-grand-budapest-hotel.jpg`,
  genre: `Drama`,
  releaseDate: 2014
};

const films = [
  {
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
  }
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main e2e tests`, () => {
  it(`Should film title be clciked`, () => {
    const onTitleClickHandler = jest.fn();
    // const onFilterCHangeHandler = jest.fn();

    const main = shallow(
        <Main
          PROMO_FILM = {PROMO_FILM}
          films = {films}
          onTitleClick={onTitleClickHandler}
          onPosterClick={() => {}}
          activeFilter = {`All genres`}
          onFilterChange={() => {}}
          onShowMoreClick = {() => {}}
          shownFilms = {8}
          filters = {[`All genres`, `Drama`]}
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
          PROMO_FILM = {PROMO_FILM}
          films = {films}
          filters = {[`All genres`, `Drama`]}
          onTitleClick={() => {}}
          onPosterClick={onPosterClickHandler}
          activeFilter = {`All genres`}
          onFilterChange={() => {}}
          onShowMoreClick = {() => {}}
          shownFilms = {8}
        />
    );

    const posters = main.find(`.small-movie-card`);
    posters.forEach((poster) => poster.simulate(`click`));
    expect(onPosterClickHandler).toHaveBeenCalledTimes(posters.length);
  });
});

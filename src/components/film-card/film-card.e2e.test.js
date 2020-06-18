import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

const film = {
  id: `lKFDHkhaeud`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FilmCard e2e tests`, () => {
  it(`FilmCard be hovered`, () => {
    const onFilmCardHover = jest.fn((args) => args);

    const filmCard = shallow(
        <FilmCard
          film = {film}
          onTitleClick = {() => {}}
          onFilmCardHover = {onFilmCardHover} />
    );

    const filmCardElement = filmCard.find(`.small-movie-card`);
    filmCardElement.simulate(`mouseover`, film);

    expect(onFilmCardHover).toHaveBeenCalledTimes(1);
    expect(onFilmCardHover.mock.calls[0][0]).toMatchObject(film);
  });
});

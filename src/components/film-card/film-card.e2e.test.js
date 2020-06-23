import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

const film = {
  id: `lKFDHkhaeud`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  preview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FilmCard e2e tests`, () => {
  it(`FilmCard be hovered`, () => {
    const testHandler = jest.fn((args) => args);

    const filmCard = shallow(
        <FilmCard
          film = {film}
          onFilmCardHover = {testHandler}
          onTitleClick = {testHandler}
          onPosterClick = {testHandler}
        />
    );

    const filmCardElement = filmCard.find(`.small-movie-card`);
    filmCardElement.simulate(`mouseenter`, film);

    expect(testHandler).toHaveBeenCalledTimes(1);
    expect(testHandler.mock.calls[0][0]).toMatchObject(film);
  });
});

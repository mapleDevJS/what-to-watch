import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

const topFilm = {
  title: `The Grand Budapest Hotel`,
  poster: `bg-the-grand-budapest-hotel.jpg`,
  genre: `Drama`,
  releaseDate: 2014
};

const films = [
  {
    id: `lKFDHkhaeud`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }, {
    id: `ksbadfjb7dh`,
    title: ``,
    poster: `bohemian-rhapsody.jpg`
  }, {
    id: `kBkfhdkfo*`,
    title: `Macbeth`,
    poster: ``
  }, {
    id: ``,
    title: `Macbeth`,
    poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }
];


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main e2e tests`, () => {
  it(`Should title be clicked`, () => {
    const titleClickHandler = jest.fn();

    const main = mount(
        <Main
          topFilm = {topFilm}
          films = {films}
          onTitleClick={titleClickHandler} />
    );

    const titles = main.find(`small-movie-card__title`);

    titles.forEach((title) => title.simulate(`click`));

    expect(titleClickHandler.mock.calls.length).toBe(titles.length);
  });
});

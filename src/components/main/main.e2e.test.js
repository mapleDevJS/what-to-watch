import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "../main/main.jsx";
import {MOVIES_TITLES} from "../../mock/movie.js";

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be clicked`, () => {
  const onTitleClickHandler = jest.fn();

  const main = shallow(
      <Main
        movie = {movie}
        moviesTitles = {MOVIES_TITLES}
        onTitkeClick = {onTitleClickHandler}
      />
  );

  const titles = main.find(`small-movie-card__link`);

  titles.forEach((title) => title.props().onClick());

  expect(onTitleClickHandler.mock.calls.length).toBe(titles.length);
});

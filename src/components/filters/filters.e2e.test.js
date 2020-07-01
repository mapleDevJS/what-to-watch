import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Filters from "./filters.jsx";

// const TOP_FILM = {
//   title: `The Grand Budapest Hotel`,
//   poster: `bg-the-grand-budapest-hotel.jpg`,
//   genre: `Drama`,
//   releaseDate: 2014
// };

// const films = [
//   {
//     id: `lKFDHkhaeud`,
//     background: `bg-the-grand-budapest-hotel.jpg`,
//     title: `Fantastic Beasts: The Crimes of Grindelwald`,
//     genre: `Drama`,
//     releaseDate: 2020,
//     bigPoster: `the-grand-budapest-hotel-poster.jpg`,
//     poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
//     preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
//     rating: 8.9,
//     level: `Very Good`,
//     totalRatings: 240,
//     director: `Wes Andreson`,
//     starring: [
//       `Bill Murray`,
//       `Edward Norton`,
//       `Jude Law`,
//       `Willem Dafoe`
//     ]
//   }
// ];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Filters e2e tests`, () => {
  it(`Should filter be clciked`, () => {
    const onFilterChangeHandler = jest.fn();
    const preventDefault = jest.fn();

    const filters = shallow(
        <Filters
          activeFilter = {`All genres`}
          onFilterChange = {onFilterChangeHandler}
        />
    );

    const filtersElements = filters.find(`.catalog__genres-list`);
    filtersElements.forEach((filter) => filter.simulate(`click`, {preventDefault, target: {textContent: `All genres`}}));
    expect(onFilterChangeHandler).toHaveBeenCalledTimes(filtersElements.length);
    expect(onFilterChangeHandler.mock.calls[0][0]).toBe(`All genres`);
  });
});

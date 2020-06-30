import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "./show-more.jsx";

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

it(`Should button "Show more" render correctly`, () => {
  const tree = renderer
    .create(
        <ShowMore
          onShowMoreClick = {() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

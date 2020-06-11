import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

const MOVIES_TITLES = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `The Grand Budapest Hotel`
];

const getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

const movie = {
  title: getRandomElement(MOVIES_TITLES),
  genre: `Drama`,
  releaseDate: 2014
};

ReactDOM.render(
    <App
      title = {movie.title}
      genre = {movie.genre}
      releaseDate = {movie.releaseDate}
    />,
    document.querySelector(`#root`)
);

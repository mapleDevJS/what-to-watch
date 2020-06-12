import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";
import {MOVIES_TITLES} from "./mock/movie.js";

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014
};

ReactDOM.render(
    <App
      movie = {movie}
      moviesTitles = {MOVIES_TITLES}
    />,
    document.querySelector(`#root`)
);

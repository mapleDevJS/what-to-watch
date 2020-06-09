import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

ReactDOM.render(
    <App
      title = {movie.title}
      genre = {movie.genre}
      releaseDate = {movie.releaseDate}
    />,
    document.querySelector(`#root`)
);

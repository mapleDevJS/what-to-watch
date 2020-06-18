import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {topFilm, createFilms} from "./mocks/films.js";

const films = createFilms();

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      topFilm = {topFilm}
      films = {films}
    />,
    root
);

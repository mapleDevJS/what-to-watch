import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {TOP_FILM, FILM_DETAILS, createFilms} from "./mocks/films.js";

const films = createFilms();

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      TOP_FILM = {TOP_FILM}
      FILM_DETAILS = {FILM_DETAILS}
      films = {films}
    />,
    root
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {TOP_FILM, createFilms} from "./mocks/films.js";

const films = createFilms();

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      TOP_FILM = {TOP_FILM}
      films = {films}
    />,
    root
);

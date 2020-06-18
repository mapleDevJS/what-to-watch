import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";

const App = (props) => {
  const {TOP_FILM, FILM_DETAILS, films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            TOP_FILM = {TOP_FILM}
            films = {films}
          />
        </Route>
        <Route exact path="/details">
          <FilmDetails
            FILM_DETAILS = {FILM_DETAILS}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  TOP_FILM: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired
  }),
  FILM_DETAILS: PropTypes.shape({
    bigPoster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    totalRatings: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired
  }),
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
      })
  ).isRequired
};

export default App;

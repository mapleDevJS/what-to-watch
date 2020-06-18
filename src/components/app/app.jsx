import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";

const App = (props) => {
  const {TOP_FILM, films} = props;

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
          <FilmDetails />
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
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
      })
  ).isRequired
};

export default App;

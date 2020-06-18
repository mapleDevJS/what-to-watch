import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {TOP_FILM, films} = props;

  return (
    <Main
      TOP_FILM = {TOP_FILM}
      films = {films}
    />
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

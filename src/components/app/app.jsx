import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {movie, moviesTitles} = props;

  return (
    <Main
      movie={movie}
      moviesTitles = {moviesTitles}
    />
  );
};

App.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired
  }),
  moviesTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;

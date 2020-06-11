import React from "react";
import Main from "./main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {title, genre, releaseDate} = props;

  return (
    <Main
      title = {title}
      genre = {genre}
      releaseDate = {releaseDate}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired
};

export default App;

import React from "react";
import Main from "./main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title, genre, releaseDate} = props;

  return (
    <Main
      title = {title}
      genre = {genre}
      releaseDate = {releaseDate}
    />
  );
};

export default App;

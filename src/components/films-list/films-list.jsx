import React from "react";
import PropTypes from "prop-types";
import {generateUniqueId} from "../../utils/utils.js";
import FilmCard from "../film-card/film-card.jsx";

const handleFilmCardHover = () => {};

const FilmsList = (props) => {
  const {films, onTitleClick} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return (
          <FilmCard
            key = {generateUniqueId()}
            film = {film}
            onFilmCardHover = {handleFilmCardHover}
            onTitleClick = {onTitleClick}
          />);
      })}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
      })
  ).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default FilmsList;

import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {film, onFilmCardHover, onTitleClick} = props;

  const poster = film.poster;
  const title = film.title;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver = {onFilmCardHover}
    >
      <div className="small-movie-card__image">
        <img
          src={`img/${poster}`}
          alt={title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick = {onTitleClick()}
          className="small-movie-card__link"
          href="movie-page.html"
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }).isRequired,
  onFilmCardHover: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default FilmCard;

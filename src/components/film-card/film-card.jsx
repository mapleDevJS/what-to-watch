import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {film, onFilmCardHover, onTitleClick, onPosterClick} = props;

  const preview = film.preview;
  const title = film.title;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => onPosterClick(film)}
      onMouseEnter = {() => onFilmCardHover(film)}
      onMouseLeave = {() => onFilmCardHover({})}
    >
      <div className="small-movie-card__image">
        <img
          src={`img/${preview}`}
          alt={title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick = {(evt) => {
            evt.preventDefault();
            onTitleClick(film);
          }}
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
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
  onFilmCardHover: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onPosterClick: PropTypes.func.isRequired
};

export default FilmCard;

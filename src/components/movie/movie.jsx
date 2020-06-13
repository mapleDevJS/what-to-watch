import React from "react";
import PropTypes from "prop-types";

const Movie = (props) => {
  const {title, onTitleClickHandler} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a onClick = {onTitleClickHandler()} className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleClickHandler: PropTypes.func.isRequired
};

export default Movie;

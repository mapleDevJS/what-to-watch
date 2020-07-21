import React, {PureComponent} from "react";

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes.js";

import VideoPlayer from "../video-player/video-player.jsx";

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film, onTitleClick, onPosterClick, isPlaying, setPlayingFilm} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onClick={() => onPosterClick(film)}
        onMouseEnter = {() => setPlayingFilm(true)}
        onMouseLeave = {() => setPlayingFilm(false)}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            isPlaying = {isPlaying}
            film = {film}
            isMuted = {true}
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
            {film.name}
          </a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onPosterClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setPlayingFilm: PropTypes.func.isRequired
};

export default FilmCard;

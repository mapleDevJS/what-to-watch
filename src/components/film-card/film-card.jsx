import React, {PureComponent} from "react";
import {Link} from "react-router-dom";

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes.js";

import VideoPlayer from "../video-player/video-player.jsx";

import {AppRoute} from "../../consts.js";

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film, onTitleClick, onPosterClick, isPlaying, setPlayingFilm} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter = {() => setPlayingFilm(true)}
        onMouseLeave = {() => setPlayingFilm(false)}
      >
        <Link
          to={AppRoute.FILM}
          onClick={() => onPosterClick(film)}
        >
          <div className="small-movie-card__image">
            <VideoPlayer
              isPlaying = {isPlaying}
              film = {film}
              isMuted = {true}
            />
          </div>
        </Link>

        <h3 className="small-movie-card__title">
          <Link
            to={AppRoute.FILM}
            onClick = {(evt) => {
              evt.preventDefault();
              onTitleClick(film);
            }}
            className="small-movie-card__link"
          >
            {film.name}
          </Link>
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

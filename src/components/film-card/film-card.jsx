import React, {PureComponent} from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes.js";

import {Operation as DataOperation} from "../../store/reducers/data/data.js";

import VideoPlayer from "../video-player/video-player.jsx";

import {AppRoute} from "../../consts.js";

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film, isPlaying, setPlayingFilm} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter = {() => setPlayingFilm(true)}
        onMouseLeave = {() => setPlayingFilm(false)}
      >
        <Link
          to={`${AppRoute.FILMS}/${film.id}`}
          onClick={()=>this.props.loadComments(film.id)}
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
            to={`${AppRoute.FILMS}/${film.id}`}
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
  isPlaying: PropTypes.bool.isRequired,
  setPlayingFilm: PropTypes.func.isRequired,
  loadComments: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadComments: (id) => dispatch(DataOperation.loadComments(id))
  };
};

export default connect(null, mapDispatchToProps)(FilmCard);

import * as React from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";
import {Operation as DataOperation} from "../../store/reducers/data/data";

import VideoPlayer from "../video-player/video-player";

import {AppRoute} from "../../consts";
import {Film} from "../../types";

interface Props {
  film: Film;
  isPlaying: boolean;
  setPlayingFilm: (b: boolean) => boolean;
  loadComments: (id: number) => void;
}

class FilmCard extends React.PureComponent<Props> {
  props: Props;

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

const mapDispatchToProps = (dispatch) => {
  return {
    loadComments: (id) => dispatch(DataOperation.loadComments(id))
  };
};

export default connect(null, mapDispatchToProps)(FilmCard);

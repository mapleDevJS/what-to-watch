import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };
  }

  render() {
    const {film, onCardHover, onTitleClick, onPosterClick} = this.props;

    const title = film.title;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onClick={() => onPosterClick(film)}
        onMouseEnter = {() => {
          onCardHover(film);
          this.setState({
            isPlaying: true
          });
        }}
        onMouseLeave = {() => {
          onCardHover(null);
          this.setState({
            isPlaying: false
          });
        }}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            isPlaying={this.state.isPlaying}
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
            {title}
          </a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    bigPoster: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    totalRatings: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired
  }).isRequired,
  onCardHover: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onPosterClick: PropTypes.func.isRequired
};

export default FilmCard;

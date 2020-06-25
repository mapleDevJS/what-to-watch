
import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._timeoutPlayHandler = null;
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.src = this.props.film.preview;
    video.muted = this.props.isMuted;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.onplay = null;
    video.muted = null;
    video.src = ``;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      this._timeoutPlayHandler = setTimeout(() => video.play(), 1000);
    } else {
      if (this._timeoutPlayHandler) {
        clearTimeout(this._timeoutPlayHandler);
        this._timeoutPlayHandler = null;
      }
      video.load();
    }
  }

  render() {
    const poster = this.props.film.poster;
    const isMuted = this.props.isMuted;

    return (
      <>
        <video
          className={`player__video`}
          ref = {this._videoRef}
          poster = {`img/${poster}`}
          muted = {isMuted}
        />
      </>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
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
  }),
};

export default VideoPlayer;

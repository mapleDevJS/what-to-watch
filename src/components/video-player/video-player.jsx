import React, {PureComponent, createRef} from "react";

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes.js";

const ERROR_MESSAGE = `The video source is unavailable`;

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._timeoutPlayHandler = null;
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.src = this.props.film.previewVideo;
    video.muted = this.props.isMuted;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.onplay = null;
    video.muted = null;
    video.src = ``;
    this._timeoutClear();
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      this._timeoutPlayHandler = setTimeout(() => video.play().catch(() => {
        throw new Error(ERROR_MESSAGE);
      }), 1000);
    } else {
      if (this._timeoutPlayHandler) {
        this._timeoutClear();
      }
      video.load();
    }
  }

  _timeoutClear() {
    clearTimeout(this._timeoutPlayHandler);
    this._timeoutPlayHandler = null;
  }

  render() {
    const poster = this.props.film.previewImg;
    const isMuted = this.props.isMuted;

    return (
      <>
        <video
          className={`player__video`}
          ref = {this._videoRef}
          poster = {poster}
          muted = {isMuted}
          type = "video/webm"
        />
      </>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  film: PropTypes.shape(filmPropTypes).isRequired,
};

export default VideoPlayer;

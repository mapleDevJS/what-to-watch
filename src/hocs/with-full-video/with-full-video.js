import React, {createRef, PureComponent} from 'react';

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes.js";

const withFullVideo = (Component) => {
  class WithFullVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this._playbackToggle = this._playbackToggle.bind(this);
      this._onFullScreenClick = this._onFullScreenClick.bind(this);

      this.state = {
        isPlaying: true,
        progress: 0,
        duration: 0,
      };
    }

    componentDidMount() {
      const {film} = this.props;
      const video = this._videoRef.current;

      video.src = film.video;
      video.play();

      video.onloadedmetadata = () => {
        this.setState({
          duration: video.duration,
        });
      };

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.onpause = () => this.setState({
        isPlaying: false,
      });

      video.ontimeupdate = () => this.setState({
        progress: Math.floor(video.currentTime),
      });
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.onloadedmetadata = null;
      video.src = ``;
      video.controls = false;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (document.fullscreenElement === null) {
        video.controls = false;
      }

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    render() {
      return <Component
        {...this.props}
        progress = {this.state.progress}
        duration = {this.state.duration}
        isPlaying = {this.state.isPlaying}
        playbackToggle = {this._playbackToggle}
        onFullScreenClick = {this._onFullScreenClick}
      >
        <video
          ref={this._videoRef}
          className="player__video"
          poster="/img/player-poster.jpg"
        />
      </Component>;
    }

    _playbackToggle() {
      this.setState((prevState) => {
        return {isPlaying: !prevState.isPlaying};
      });
    }

    _onFullScreenClick() {
      const video = this._videoRef.current;
      video.requestFullscreen();
      video.controls = true;
    }
  }

  WithFullVideo.propTypes = {
    film: PropTypes.shape(filmPropTypes).isRequired,
  };

  return WithFullVideo;
};

export default withFullVideo;

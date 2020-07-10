import React, {createRef, PureComponent} from 'react';
import PropTypes from "prop-types";

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

    _formatDurationToTime(duration) {
      const time = parseInt(duration, 10);
      const hours = Math.floor(time / 3600).toString().padStart(2, `0`);
      const minutes = Math.floor((time - (hours * 3600)) / 60).toString().padStart(2, `0`);
      const seconds = time - (hours * 3600) - (minutes * 60).toString().padStart(2, `0`);

      return `${hours}:${minutes}:${seconds}`;
    }

    _onFullScreenClick() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    componentDidMount() {
      const {preview} = this.props;
      const video = this._videoRef.current;

      video.src = preview;
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
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

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
        time = {this._formatDurationToTime(this.state.duration)}
        playbackToggle = {this._playbackToggle}
        onFullScreenClick = {this._onFullScreenClick}
      >
        <video
          ref={this._videoRef}
          className="player__video"
          poster="img/player-poster.jpg"
        />
      </Component>;
    }

    _playbackToggle() {
      this.setState((prevState) => {
        return {isPlaying: !prevState.isPlaying};
      });
    }

  }

  WithFullVideo.propTypes = {
    preview: PropTypes.string.isRequired,
  };

  return WithFullVideo;
};

export default withFullVideo;

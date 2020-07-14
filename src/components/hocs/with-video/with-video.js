import React, {PureComponent} from "react";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this._setPlayingFilm = this._setPlayingFilm.bind(this);
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          setPlayingFilm={this._setPlayingFilm}
        />
      );
    }

    _setPlayingFilm(isPlaying) {
      this.setState({
        isPlaying
      });
    }
  }

  WithVideo.propTypes = {};

  return WithVideo;
};

export default withVideo;

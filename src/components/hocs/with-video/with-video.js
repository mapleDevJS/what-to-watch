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

    _setPlayingFilm(isPlaying) {
      this.setState({
        isPlaying
      });
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
  }

  WithVideo.propTypes = {};

  return WithVideo;
};

export default withVideo;

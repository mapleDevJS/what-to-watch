import * as React from "react";
import {Subtract} from "utility-types";


interface State {
  isPlaying: boolean;
}

interface InjectedProps {
  isPlaying: boolean;
  setPlayingFilm: () => void;
}

const withVideo = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithVideo extends React.PureComponent<T, State> {
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

  return WithVideo;
};

export default withVideo;

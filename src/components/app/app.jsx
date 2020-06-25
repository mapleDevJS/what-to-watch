import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";

const View = {
  LIST: `list`,
  DETAILS: `details`
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      view: View.LIST,
      activeFilm: null
    };

    this._onCardClick = this._onCardClick.bind(this);
  }

  _onCardClick(film) {
    this.setState({
      view: View.DETAILS,
      activeFilm: film
    });
  }

  render() {
    const {TOP_FILM, films} = this.props;

    switch (this.state.view) {
      case View.DETAILS:
        return (
          <FilmDetails
            film = {this.state.activeFilm}
          />
        );

      default:
        return (
          <Main
            TOP_FILM = {TOP_FILM}
            films = {films}
            onTitleClick = {this._onCardClick}
            onPosterClick = {this._onCardClick}
          />
        );
    }
  }
}

App.propTypes = {
  TOP_FILM: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired
  }),
  films: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
  ).isRequired
};

export default App;

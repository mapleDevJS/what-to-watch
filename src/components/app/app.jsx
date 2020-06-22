import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";

const VIEW = {
  LIST: `list`,
  DETAILS: `details`
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      view: VIEW.LIST,
      activeFilm: false
    };

    this._onCardElementClickHandler = this._onCardElementClickHandler.bind(this);
  }

  _onCardElementClickHandler(film) {
    this.setState({
      view: VIEW.DETAILS,
      activeFilm: film
    });
  }

  _renderApp() {
    const {TOP_FILM, films} = this.props;

    switch (this.state.view) {
      case VIEW.LIST:
        return (
          <Main
            TOP_FILM = {TOP_FILM}
            films = {films}
            onTitleClick = {this._onCardElementClickHandler}
            onPosterClick = {this._onCardElementClickHandler}
          />
        );

      case VIEW.DETAILS:
        return (
          <FilmDetails
            film = {this.state.activeFilm}
          />
        );
    }

    return null;
  }

  render() {
    const {TOP_FILM, films} = this.props;

    switch (this.state.view) {
      case VIEW.LIST:
        return (
          <Main
            TOP_FILM = {TOP_FILM}
            films = {films}
            onTitleClick = {this._onCardElementClickHandler}
            onPosterClick = {this._onCardElementClickHandler}
          />
        );

      case VIEW.DETAILS:
        return (
          <FilmDetails
            film = {this.state.activeFilm}
          />
        );
    }

    return null;
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

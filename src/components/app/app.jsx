import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";

import {connect} from "react-redux";
import {changeView, filterFilms} from "../../redux/actions.js";

export const View = {
  LIST: `list`,
  DETAILS: `details`
};

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {TOP_FILM} = this.props;

    switch (this.props.view) {
      case View.DETAILS:
        return (
          <FilmDetails
            film = {this.props.activeFilm}
          />
        );

      default:
        return (
          <Main
            TOP_FILM = {TOP_FILM}
            films = {this.props.films}
            onTitleClick = {this.props.onCardClick}
            onPosterClick = {this.props.onCardClick}
            activeFilter = {this.props.activeFilter}
            onFilterChange = {this.props.onFilterChange}
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
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  activeFilm: PropTypes.shape({
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
};

const mapStateToProps = (state) => {
  return {
    view: state.view,
    activeFilm: state.activeFilm,
    activeFilter: state.activeFilter,
    films: state.films
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (film) => dispatch(changeView(film)),
    onFilterChange: (filter) => dispatch(filterFilms(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

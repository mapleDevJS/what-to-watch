import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";

import {connect} from "react-redux";
import {changeView, filterFilms, renderFilms, playVideo} from "../../redux/actions.js";
import FullVideoPlayer from "../full-video-player/full-video-player.jsx";
import withFullVideo from "../hocs/with-full-video/with-full-video.js";

export const View = {
  LIST: `list`,
  DETAILS: `details`,
  VIDEO: `video`
};

const FullVideoPlayerWrapped = withFullVideo(FullVideoPlayer);

const App = (props) => {
  const {PROMO_FILM} = props;

  switch (props.view) {
    case View.DETAILS:
      return (
        <FilmDetails
          film = {props.activeFilm}
          onPlayClick = {props.onPlayClick}
        />
      );

    case View.VIDEO:
      return (
        <FullVideoPlayerWrapped
          title = {props.activeFilm.title}
          onExitClickHandler = {() => {}}
        />
      );

    default:
      return (
        <Main
          PROMO_FILM = {PROMO_FILM}
          shownFilms = {props.shownFilms}
          films = {props.filteredFilms}
          filters = {props.filters}
          onTitleClick = {props.onCardClick}
          onPosterClick = {props.onCardClick}
          activeFilter = {props.activeFilter}
          onFilterChange = {props.onFilterChange}
          onShowMoreClick = {props.onShowMoreClick}
          onPlayClick = {props.onPlayClick}
        />
      );
  }
};


App.propTypes = {
  PROMO_FILM: PropTypes.shape({
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
  filteredFilms: PropTypes.arrayOf(
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
  onShowMoreClick: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
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
  }),
  shownFilms: PropTypes.number.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = (state) => {
  return {
    view: state.view,
    activeFilm: state.activeFilm,
    activeFilter: state.activeFilter,
    films: state.films,
    filteredFilms: state.filteredFilms,
    shownFilms: state.shownFilms,
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (film) => dispatch(changeView(film)),
    onFilterChange: (filter) => dispatch(filterFilms(filter)),
    onShowMoreClick: () => dispatch(renderFilms()),
    onPlayClick: (film) => dispatch(playVideo(film))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

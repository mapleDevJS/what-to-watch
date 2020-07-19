import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";

import {connect} from "react-redux";
import {changeView, filterFilms, renderFilms, playVideo, exitVideo} from "../../redux/actions.js";
import FullScreenPlayer from "../full-screen-player/full-screen-player.jsx";
import withFullVideo from "../hocs/with-full-video/with-full-video.js";
import {getUniqueGenres} from "../../utils/utils.js";
import NameSpace from "../../redux/reducers/name-space.js";

export const View = {
  LIST: `list`,
  DETAILS: `details`,
  VIDEO: `video`
};

const FullScreenPlayerWrapped = withFullVideo(FullScreenPlayer);

const App = (props) => {
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
        <FullScreenPlayerWrapped
          preview = {props.activeFilm.preview}
          title = {props.activeFilm.title}
          onExitClick = {props.onExitClick}
        />
      );

    default:
      return (
        <Main
          promoFilm = {props.promoFilm}
          shownFilms = {props.shownFilms}
          films = {props.filteredFilms}
          filters = {getUniqueGenres(props.films)}
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
  promoFilm: PropTypes.shape({
    color: PropTypes.string,
    bigPoster: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewImg: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    releaseDate: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    videoLink: PropTypes.string.isRequired
  }),
  films: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string,
        bigPoster: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavourite: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        previewImg: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        releaseDate: PropTypes.number.isRequired,
        runtime: PropTypes.number.isRequired,
        totalRatings: PropTypes.number.isRequired,
        level: PropTypes.string.isRequired,
        starring: PropTypes.array.isRequired,
        videoLink: PropTypes.string.isRequired
      })
  ).isRequired,
  filteredFilms: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string,
        bigPoster: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavourite: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        previewImg: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        releaseDate: PropTypes.number.isRequired,
        runtime: PropTypes.number.isRequired,
        totalRatings: PropTypes.number.isRequired,
        level: PropTypes.string.isRequired,
        starring: PropTypes.array.isRequired,
        videoLink: PropTypes.string.isRequired
      })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onExitClick: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  activeFilm: PropTypes.shape({
    color: PropTypes.string,
    bigPoster: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewImg: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    releaseDate: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    videoLink: PropTypes.string.isRequired
  }),
  shownFilms: PropTypes.number.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = (state) => {
  return {
    view: state[NameSpace.FILMS].view,
    activeFilm: state[NameSpace.DATA].activeFilm,
    activeFilter: state[NameSpace.DATA].activeFilter,
    films: state[NameSpace.DATA].films,
    promoFilm: state[NameSpace.DATA].promoFilm,
    filteredFilms: state[NameSpace.DATA].filteredFilms,
    shownFilms: state[NameSpace.FILMS].shownFilms,
    filters: state[NameSpace.FILMS].filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (film) => dispatch(changeView(film)),
    onFilterChange: (filter) => dispatch(filterFilms(filter)),
    onShowMoreClick: () => dispatch(renderFilms()),
    onPlayClick: () => dispatch(playVideo()),
    onExitClick: () => dispatch(exitVideo())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

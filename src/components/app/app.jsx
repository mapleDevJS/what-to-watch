import React from "react";
import {Switch, Route, Router} from "react-router-dom";

import {connect} from "react-redux";
import {filterFilms, renderFilms, setActiveFilm} from "../../redux/actions.js";
import {getFilms, getFilteredFilms, getPromoFilm, getActiveFilm} from "../../redux/reducers/data/selectors";
import {getActiveFilter, getShownFilms} from "../../redux/reducers/films/selectors";
import {getAuthorizationStatus, getAuthorizationError} from "../../redux/reducers/user/selectors";

import {Operation as UserOperation} from "../../redux/reducers/user/user.js";

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes.js";

import Main from "../main/main.jsx";
import FilmDetails from "../film-details/film-details.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import FullScreenPlayer from "../full-screen-player/full-screen-player.jsx";
import withFullVideo from "../hocs/with-full-video/with-full-video.js";

import {getUniqueGenres} from "../../utils/utils.js";
import history from "../../history.js";
import {AppRoute} from "../../consts.js";

const FullScreenPlayerWrapped = withFullVideo(FullScreenPlayer);

const App = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main
            authorizationStatus = {props.authorizationStatus}
            login = {props.login}
            films = {props.filteredFilms}
            promoFilm = {props.promoFilm}
            shownFilms = {props.shownFilms}
            filters = {props.filters}
            activeFilter = {props.activeFilter}
            onTitleClick = {props.onCardClick}
            onPosterClick = {props.onCardClick}
            onFilterChange = {props.onFilterChange}
            onShowMoreClick = {props.onShowMoreClick}
          />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmDetails
            film = {props.activeFilm}
          />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <FullScreenPlayerWrapped
            film = {props.activeFilm}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn
            authorizationError = {props.authorizationError}
            onSubmit={props.login}
          />
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmPropTypes)).isRequired,
  filteredFilms: PropTypes.arrayOf(PropTypes.shape(filmPropTypes)).isRequired,
  promoFilm: PropTypes.shape(filmPropTypes),
  activeFilm: PropTypes.shape(filmPropTypes),
  onCardClick: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  shownFilms: PropTypes.number.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authorizationError: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    films: getFilms(state),
    filteredFilms: getFilteredFilms(state),
    promoFilm: getPromoFilm(state),
    activeFilm: getActiveFilm(state),
    filters: getUniqueGenres(getFilms(state)),
    activeFilter: getActiveFilter(state),
    shownFilms: getShownFilms(state),
    authorizationStatus: getAuthorizationStatus(state),
    authorizationError: getAuthorizationError(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (film) => {
      dispatch(setActiveFilm(film));
    },
    onFilterChange: (filter) => dispatch(filterFilms(filter)),
    onShowMoreClick: () => dispatch(renderFilms()),
    login: (authData) => dispatch(UserOperation.login(authData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

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

// export const View = {
//   LIST: `List`,
//   DETAILS: `Details`,
//   VIDEO: `Video`,
//   SIGN_IN: `Sign in`
// };

const FullScreenPlayerWrapped = withFullVideo(FullScreenPlayer);

const App = (props) => {
  // switch (props.view) {
  //   case View.DETAILS:
  //     return (
  //       <FilmDetails
  //         film = {props.activeFilm}
  //         onPlayClick = {props.onPlayClick}
  //       />
  //     );

  //   case View.VIDEO:
  //     return (
  //       <FullScreenPlayerWrapped
  //         film = {props.activeFilm}
  //         onExitClick = {props.onExitClick}
  //       />
  //     );

  //   case View.SIGN_IN:
  //     return (
  // <SignIn
  //   authorizationError = {props.authorizationError}
  //   onSubmit={props.login}
  // />
  //     );

  //   default:
  //     return (
  //       <Main
  //         authorizationStatus = {props.authorizationStatus}
  //         login = {props.login}
  //         films = {props.filteredFilms}
  //         promoFilm = {props.promoFilm}
  //         shownFilms = {props.shownFilms}
  //         filters = {props.filters}
  //         activeFilter = {props.activeFilter}
  //         onTitleClick = {props.onCardClick}
  //         onPosterClick = {props.onCardClick}
  //         onFilterChange = {props.onFilterChange}
  //         onShowMoreClick = {props.onShowMoreClick}
  //         onPlayClick = {props.onPlayClick}
  //         onSignInClick = {props.onSignInClick}
  //       />
  //     );
  // }

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
            // onPlayClick = {props.onPlayClick}
            // onSignInClick = {props.onSignInClick}
          />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmDetails
            film = {props.activeFilm}
            // onPlayClick = {props.onPlayClick}
          />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <FullScreenPlayerWrapped
            film = {props.activeFilm}
            // onExitClick = {props.onExitClick}
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
  // onPlayClick: PropTypes.func.isRequired,
  // onExitClick: PropTypes.func.isRequired,
  // view: PropTypes.string.isRequired,
  shownFilms: PropTypes.number.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authorizationError: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  // onSignInClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    // view: getView(state),
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
      // history.push(AppRoute.FILM);
    },
    onFilterChange: (filter) => dispatch(filterFilms(filter)),
    onShowMoreClick: () => dispatch(renderFilms()),
    // onPlayClick: () => dispatch(playVideo()),
    // onExitClick: () => dispatch(exitVideo()),
    // onSignInClick: () => dispatch(history.push(AppRoute.LOGIN)),
    login: (authData) => dispatch(UserOperation.login(authData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import {Switch, Route, Router} from "react-router-dom";

import {connect} from "react-redux";

import {getAppLoadingStatus, getFilms, getFavoriteFilms} from "../../redux/reducers/data/selectors";
import {getAuthorizationStatus, getAuthorizationError} from "../../redux/reducers/user/selectors";
import {Operation as UserOperation, AuthorizationStatus} from "../../redux/reducers/user/user.js";

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes.js";

import Loader from "../loader/loader.jsx";

import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import MyList from "../my-list/my-list.jsx";
import Review from "../review/review.jsx";
import FilmDetails from "../film-page/film-page.jsx";
import FullScreenPlayer from "../full-screen-player/full-screen-player.jsx";
import withFullVideo from "../hocs/with-full-video/with-full-video.js";

import PrivateRoute from "../private-route/private-route.js";

import history from "../../history.js";
import {AppRoute} from "../../consts.js";
import {getFilmById} from '../../utils/utils.js';

const FullScreenPlayerWrapped = withFullVideo(FullScreenPlayer);

const App = (props) => {
  const {isLoading, authorizationStatus, films, favoriteFilms} = props;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT}
          render = {() => {
            return isLoading ? <Loader/> : <Main/>;
          }}
        />

        <Route exact path={AppRoute.LOGIN}
          render = {() => {
            return authorizationStatus === AuthorizationStatus.AUTH
              ? <Main/>
              : <SignIn/>;
          }}
        />

        {/* <PrivateRoute exact
          path={AppRoute.LOGIN}
          // redirectPath={AppRoute.LOGIN}
          render={() => {
            return (
              <SignIn/>);
          }}>
        </PrivateRoute> */}

        <Route exact path={`${AppRoute.FILMS}/:id`}
          render={(routeProps) => {
            const id = Number(routeProps.match.params.id);
            const activeFilm = getFilmById(films, id);

            return isLoading ?
              <Loader/> :

              <FilmDetails
                film = {activeFilm}
              />;

          }}
        />

        <Route exact path={`${AppRoute.FILMS}/:id${AppRoute.PLAYER}`}
          render={(routeProps) => {
            const id = Number(routeProps.match.params.id);
            const activeFilm = getFilmById(films, id);

            return isLoading ?
              <Loader/> :

              <FullScreenPlayerWrapped film={activeFilm}/>;
          }}>
        </Route>

        <PrivateRoute exact path={AppRoute.MY_LIST}
          redirectPath={AppRoute.LOGIN}
          render={() => {
            return (
              <MyList
                authorizationStatus={authorizationStatus}
                films = {favoriteFilms}
              />);
          }}>
        </PrivateRoute>

        <PrivateRoute exact path={AppRoute.REVIEW}
          redirectPath={AppRoute.LOGIN}
          render={() => {
            return (
              <Review/>);
          }}>
        </PrivateRoute>

      </Switch>
    </Router>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(filmPropTypes)).isRequired,
  favoriteFilms: PropTypes.arrayOf(PropTypes.shape(filmPropTypes)).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  authorizationError: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLoading: getAppLoadingStatus(state),
    films: getFilms(state),
    favoriteFilms: getFavoriteFilms(state),
    authorizationStatus: getAuthorizationStatus(state),
    authorizationError: getAuthorizationError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (authData) => dispatch(UserOperation.login(authData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

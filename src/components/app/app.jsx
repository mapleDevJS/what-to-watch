import React from "react";
import {Switch, Route, Router, Redirect} from "react-router-dom";

import {connect} from "react-redux";

import {Operation as DataOperation} from "../../store/reducers/data/data.js";
import {getAppLoadingStatus, getFilms, getFavoriteFilms, getComments} from "../../store/reducers/data/selectors";
import {getAuthorizationStatus, getAuthorizationError} from "../../store/reducers/user/selectors";
import {Operation as UserOperation, AuthorizationStatus} from "../../store/reducers/user/user.js";

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes.js";

import Loader from "../loader/loader.jsx";

import withFullVideo from "../../hocs/with-full-video/with-full-video.js";
import withReview from "../../hocs/with-review/with-review.js";

import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import MyList from "../my-list/my-list.jsx";
import AddReview from "../add-review/add-review.jsx";
import FilmPage from "../film-page/film-page.jsx";
import FullScreenPlayer from "../full-screen-player/full-screen-player.jsx";

import PrivateRoute from "../private-route/private-route.js";

import history from "../../history.js";
import {AppRoute} from "../../consts.js";
import {getFilmById} from '../../utils/utils.js';

const FullScreenPlayerWrapped = withFullVideo(FullScreenPlayer);
const AddReviewWrapped = withReview(AddReview);

const App = (props) => {
  const {isLoading, authorizationStatus, films, favoriteFilms} = props;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT}
          render = {() => isLoading ? <Loader/> : <Main/>}
        />

        <Route exact path={AppRoute.LOGIN}
          render = {() => {
            if (isLoading) {
              return <Loader/>;
            } else {
              return authorizationStatus !== AuthorizationStatus.AUTH
                ? <SignIn/>
                : <Redirect to={AppRoute.ROOT}/>;
            }
          }}
        />

        <Route exact path={`${AppRoute.FILMS}/:id`}
          render={(routeProps) => {
            const id = Number(routeProps.match.params.id);
            const activeFilm = getFilmById(films, id);

            return isLoading
              ? <Loader/>
              : <FilmPage film = {activeFilm}/>;
          }}
        />

        <Route exact path={`${AppRoute.PLAYER}/:id`}
          render={(routeProps) => {
            const id = Number(routeProps.match.params.id);
            const activeFilm = getFilmById(films, id);

            return isLoading
              ? <Loader/>
              : <FullScreenPlayerWrapped film={activeFilm}/>;
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

        <PrivateRoute exact path={`${AppRoute.FILMS}/:id${AppRoute.REVIEW}`}
          redirectPath={AppRoute.LOGIN}
          render={(routeProps) => {
            const id = Number(routeProps.match.params.id);
            const activeFilm = getFilmById(films, id);
            return (
              <AddReviewWrapped film = {activeFilm}/>);
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
  loadComments: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLoading: getAppLoadingStatus(state),
    films: getFilms(state),
    favoriteFilms: getFavoriteFilms(state),
    authorizationStatus: getAuthorizationStatus(state),
    authorizationError: getAuthorizationError(state),
    comments: getComments(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (authData) => dispatch(UserOperation.login(authData)),
    loadComments: (id) => dispatch(DataOperation.loadComments(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

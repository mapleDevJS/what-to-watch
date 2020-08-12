import * as React from "react";
import {Switch, Route, Router, Redirect} from "react-router-dom";

import {connect} from "react-redux";

import {Operation as DataOperation} from "../../store/reducers/data/data";
import {getAppLoadingStatus, getFilms, getFavoriteFilms, getComments} from "../../store/reducers/data/selectors";
import {getAuthorizationStatus, getAuthorizationError} from "../../store/reducers/user/selectors";
import {Operation as UserOperation, AuthorizationStatus} from "../../store/reducers/user/user";

import Loader from "../loader/loader";

import withFullVideo from "../../hocs/with-full-video/with-full-video";
import withReview from "../../hocs/with-review/with-review";

import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import AddReview from "../add-review/add-review";
import FilmPage from "../film-page/film-page";
import FullScreenPlayer from "../full-screen-player/full-screen-player";

import PrivateRoute from "../private-route/private-route";

import history from "../../history";
import {AppRoute} from "../../consts";
import {getFilmById} from '../../utils/utils';

import {Film} from '../../types';

interface Props {
  isLoading: boolean;
  films: Array<Film>;
  favoriteFilms: Array<Film>;
  authorizationStatus: string;
  authorizationError: boolean;
  login: () => void;
  loadComments: () => void;
}

const FullScreenPlayerWrapped = withFullVideo(FullScreenPlayer);
const AddReviewWrapped = withReview(AddReview);

const App: React.FunctionComponent<Props> = (props: Props) => {
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

import * as React from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

import {Operation as DataOperation} from "../../store/reducers/data/data";
import {getFilms, getComments} from "../../store/reducers/data/selectors";
import {AuthorizationStatus} from "../../store/reducers/user/user";
import {getAuthorizationStatus} from "../../store/reducers/user/selectors";

import SvgContainer from "../svg-container/svg-container";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import MyListButton from "../my-list-button/my-list-button";
import Tabs from "../tabs/tabs";
import FilmsList from "../films-list/films-list";
import Footer from "../footer/footer";

import {AppRoute} from "../../consts";
import {getSimilarFilms} from "../../utils/utils";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab";

import {Film, Comment} from "../../types";

interface Props {
  film: Film;
  comments: Array<Comment>;
  films: Array<Film>;
  isUserAuthorized: boolean;
  loadComments: (id: number) => void;
}

const TabsWrapped = withActiveTab(Tabs);

class FilmPage extends React.Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
  }

  render() {
    const {film, comments, films, isUserAuthorized} = this.props;

    const {
      id,
      color,
      name,
      genre,
      released,
      poster,
      backgroundImg
    } = film;

    return (
      <>
        <SvgContainer />

        <section className="movie-card movie-card--full" style = {{background: color}}>
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImg} alt={name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <Link
                  to={AppRoute.ROOT}
                  className="logo__link"
                >
                  <Logo/>
                </Link>
              </div>

              <UserBlock/>

            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>

                <div className="movie-card__buttons">
                  <Link to={`${AppRoute.PLAYER}/${id}`}
                    className="btn btn--play movie-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </Link>

                  <MyListButton film = {film}/>

                  {
                    isUserAuthorized ?
                      <Link
                        to={`${AppRoute.FILMS}/${id}${AppRoute.REVIEW}`}
                        className="btn movie-card__button"
                      >
                        Add review
                      </Link> :
                      <></>
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={poster} alt={`${poster} poster`} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <TabsWrapped
                  film = {film}
                  comments = {comments}
                />

              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__movies-list">
              <FilmsList films = {getSimilarFilms(films, film)}/>
            </div>
          </section>

          <Footer/>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUserAuthorized: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
    films: getFilms(state),
    comments: getComments(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadComments: (id) => dispatch(DataOperation.loadComments(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);

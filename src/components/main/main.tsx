import * as React from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

import {Creator} from "../../store/reducers/films/actions";
import {getFilteredFilms, getPromoFilm} from "../../store/reducers/data/selectors";
import {getShownFilms} from "../../store/reducers/films/selectors";

import SvgContainer from "../svg-container/svg-container";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import MyListButton from "../my-list-button/my-list-button";
import Filters from "../filters/filters";
import FilmsList from "../films-list/films-list";
import ShowMore from "../show-more/show-more";
import Footer from "../footer/footer";

import {AppRoute} from "../../consts";
import {Film} from "../../types";

interface Props {
  films: Array<Film>;
  promoFilm: Film;
  shownFilms: number;
  onShowMoreClick: () => void;
}

const Main: React.FunctionComponent<Props> = (props: Props) => {
  const {
    films,
    promoFilm,
    shownFilms,
    onShowMoreClick,
  } = props;

  const {
    id,
    backgroundImg,
    name,
    poster,
    genre,
    released
  } = promoFilm;

  return (
    <React.Fragment>
      <SvgContainer/>
      <section className="movie-card" >
        <div
          className="movie-card__bg"
          style = {
            {backgroundImage: `linear-gradient(-180deg, #180202 0%, #000 100%)`}
          }
        >
          <img src={backgroundImg} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link
              to={AppRoute.ROOT}
              className="logo__link">
              <Logo/>
            </Link>
          </div>

          <UserBlock/>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={poster}
                alt={name}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link
                  to={`${AppRoute.PLAYER}/${id}`}
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <MyListButton film = {promoFilm}/>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Filters/>

          <div className="catalog__movies-list">
            <FilmsList films = {films}/>
          </div>

          {

            shownFilms <= films.length ?
              <ShowMore
                onShowMoreClick = {onShowMoreClick}
              /> :
              ``
          }

        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    films: getFilteredFilms(state),
    promoFilm: getPromoFilm(state),
    shownFilms: getShownFilms(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowMoreClick: () => dispatch(Creator.showMore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

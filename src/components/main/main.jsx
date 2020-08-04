import React from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes.js";

import {Creator} from "../../redux/reducers/films/actions.js";
import {getFilteredFilms, getPromoFilm} from "../../redux/reducers/data/selectors";
import {getShownFilms} from "../../redux/reducers/films/selectors";

import SvgContainer from "../svg-container/svg-container.jsx";
import Logo from "../logo/logo.jsx";
import User from "../user/user.jsx";
import MyListButton from "../my-list-button/my-list-button.jsx";
import Filters from "../filters/filters.jsx";
import FilmsList from "../films-list/films-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import Footer from "../footer/footer.jsx";


import {AppRoute} from "../../consts.js";

const Main = (props) => {
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
      <section className="movie-card">
        <div className="movie-card__bg">
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

          <User/>
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
                  to={`${AppRoute.FILMS}/${id}${AppRoute.PLAYER}`}
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

Main.propTypes = {
  promoFilm: PropTypes.shape(filmPropTypes),
  shownFilms: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(filmPropTypes)).isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
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

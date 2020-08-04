import React from "react";
import {Link} from "react-router-dom";

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes.js";

import Svg from "../svg/svg.jsx";
import Logo from "../logo/logo.jsx";
import Filters from "../filters/filters.jsx";
import FilmsList from "../films-list/films-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import Footer from "../footer/footer.jsx";

import {AuthorizationStatus} from "../../redux/reducers/user/user.js";
import {AppRoute} from "../../consts.js";

const Main = (props) => {
  const {
    authorizationStatus,
    promoFilm,
    shownFilms,
    films,
    filters,
    onTitleClick,
    onPosterClick,
    activeFilter,
    onFilterChange,
    onShowMoreClick,
  } = props;

  return (
    <React.Fragment>
      <Svg />

      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoFilm.backgroundImg} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link
              to={AppRoute.ROOT}
              className="logo__link">
              <Logo />
            </Link>
          </div>

          <div className="user-block">
            {authorizationStatus === AuthorizationStatus.AUTH ?
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div> :
              <Link
                to={AppRoute.LOGIN}
                // onClick={onSignInClick}
                className="user-block__link"
                style={{cursor: `pointer`, textDecoration: `none`, color: `inherit`}}
              >
                Sign in
              </Link>
            }
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={promoFilm.poster}
                alt={promoFilm.name}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilm.genre}</span>
                <span className="movie-card__year">{promoFilm.released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link
                  to={AppRoute.PLAYER}
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Filters
            activeFilter = {activeFilter}
            onFilterChange = {onFilterChange}
            filters = {filters}
          />

          <FilmsList
            films = {films.slice(0, shownFilms)}
            onTitleClick = {onTitleClick}
            onPosterClick = {onPosterClick}
          />

          {
            shownFilms >= films.length ?
              `` :
              <ShowMore
                onShowMoreClick = {onShowMoreClick}
              />
          }

        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  promoFilm: PropTypes.shape(filmPropTypes),
  shownFilms: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(filmPropTypes)).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onPosterClick: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Main;

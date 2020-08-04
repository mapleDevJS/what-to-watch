import React from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes";

import {getFilms} from "../../redux/reducers/data/selectors.js";

import SvgContainer from "../svg-container/svg-container.jsx";
import Logo from "../logo/logo.jsx";
import User from "../user/user.jsx";
import MyListButton from "../my-list-button/my-list-button.jsx";
import FilmsList from "../films-list/films-list.jsx";
import Footer from "../footer/footer.jsx";

import {AppRoute} from "../../consts";
import {getSimilarFilms, getLevel} from "../../utils/utils.js";


const FilmDetails = (props) => {
  const {film, films} = props;

  const {
    color,
    name,
    description,
    genre,
    released,
    poster,
    backgroundImg,
    rating,
    director,
    starring,
    scoresCount,
  } = film;

  return (
    <React.Fragment>
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

            <User/>

          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`${AppRoute.FILMS}/${film.id}${AppRoute.PLAYER}`}
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <MyListButton film = {film}/>

                <Link
                  to = {AppRoute.REVIEW}
                  className="btn movie-card__button"
                >
                    Add review
                </Link>
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
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{getLevel(rating)}</span>
                  <span className="movie-rating__count">{`${scoresCount} ratings`}</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{description}</p>
                <p className="movie-card__director"><strong>Director: {director}</strong></p>
                <p className="movie-card__starring"><strong>Starring: {starring.map((star) => star).join(`, `)} and other</strong></p>
              </div>
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

        <Footer />
      </div>
    </React.Fragment>
  );
};

FilmDetails.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(filmPropTypes)).isRequired,
};

const mapStateToProps = (state) => {

  return {
    films: getFilms(state)
  };
};

export default connect(mapStateToProps)(FilmDetails);

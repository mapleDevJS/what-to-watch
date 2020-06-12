import React from "react";
import PropTypes from "prop-types";

import Movie from "./movie.jsx";

const renderMovies = (titles) => {
  return titles.map((title) => {
    return (
      <Movie
        key = {title}
        title = {title}
      />
    );
  });
};

const Main = (props) => {
  const {movie, moviesTitles} = props;

  return (
    <React.Fragment>
      <div className="visually-hidden">

        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <symbol viewBox="0 0 19 20">
            <title>+</title>
            <g fill="none" fillRule="evenodd" strokeWidth="1">
              <polygon points="10.778 11.288 10.778 19.553 8.4165 19.553 8.4165 11.288 0.62793 11.288 0.62793 8.9268 8.4165 8.9268 8.4165 0.66211 10.778 0.66211 10.778 8.9268 18.566 8.9268 18.566 11.288" fill="#EEE5B5"/>
            </g>
          </symbol>
          <symbol fill="#FFF9D9" viewBox="0 0 27 27">
            <path d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" clipRule="evenodd" fillOpacity="0.7" fillRule="evenodd"/>
            <path d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" clipRule="evenodd" fillOpacity="0.7" fillRule="evenodd"/>
            <path d="m0 3.1429v7.8571h3.1429v-7.8571h7.8571v-3.1429h-11v3.1429z" clipRule="evenodd" fillOpacity="0.7" fillRule="evenodd"/>
            <path d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" clipRule="evenodd" fillOpacity="0.7" fillRule="evenodd"/>
          </symbol>
          <symbol viewBox="0 0 18 14">
            <path d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5" clipRule="evenodd" fillRule="evenodd"/>
          </symbol>
          <symbol viewBox="0 0 14 21">
            <g fill="#EEE5B5" fillRule="evenodd" strokeWidth="1">
              <polygon points="0 -1.1191e-13 4 -1.1191e-13 4 21 0 21" fillRule="nonzero"/>
              <polygon points="10 -1.1191e-13 14 -1.1191e-13 14 21 10 21" fillRule="nonzero"/>
            </g>
          </symbol>
          <symbol id="play-s" viewBox="0 0 19 19">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
          </symbol>
        </svg>

      </div>

      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
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

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__movies-list">
            {renderMovies(moviesTitles)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }),
  moviesTitles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Main;

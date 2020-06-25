import React from "react";
import PropTypes from "prop-types";

const FilmDetails = (props) => {
  const {film} = props;

  const {
    background,
    title,
    genre,
    releaseDate,
    poster,
    bigPoster,
    rating,
    level,
    totalRatings,
    director,
    starring
  } = film;

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

      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={`img/${background}`} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
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
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
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
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/${bigPoster}`} alt={`${poster} poster`} width="218" height="327" />
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
                  <span className="movie-rating__level">{level}</span>
                  <span className="movie-rating__count">{`${totalRatings} ratings`}</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.</p>

                <p>Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

                <p className="movie-card__director"><strong>Director: {director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {starring} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
              </h3>
            </article>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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

FilmDetails.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    bigPoster: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    totalRatings: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired
  })
};

export default FilmDetails;

import * as React from "react";
import {Link} from 'react-router-dom';

import SvgContainer from "../svg-container/svg-container";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";

import {AppRoute, CommentLength} from '../../consts';
import {Film} from '../../types';

const MAX_RATING = 5;
const TEXTAREA_COLOR = `rgba(255, 255, 255, 0.3)`;

const reviewSubmitButton = {
  post: `Post`,
  sending: `Sending...`,
};

interface Props {
  film: Film;
  isLoading: boolean;
  isError: boolean;
  onSubmitClick: (evt: React.FormEvent<HTMLFormElement>) => void;
  onRatingChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onReviewChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isSubmitDisabled: boolean;
}

const AddReview: React.FunctionComponent<Props> = (props: Props) => {

  const {
    film,
    isLoading,
    isError,
    onSubmitClick,
    onRatingChange,
    onReviewChange,
    isSubmitDisabled
  } = props;

  const {
    id,
    name,
    color,
    backgroundImg,
    poster,
  } = film;

  return (
    <>
      <SvgContainer/>
      <section className="movie-card movie-card--full" style={{backgroundColor: color}}>
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={backgroundImg} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link
                to={AppRoute.ROOT}
                className="logo__link"
              >
                <Logo/>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link
                    to={`${AppRoute.FILMS}/${id}`}
                    className="breadcrumbs__link">{name}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock/>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={poster} alt={name} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form
            action="#"
            className="add-review__form"
            onSubmit={onSubmitClick}
          >
            <div
              className="rating"
            >
              <div
                className="rating__stars"
                onChange={onRatingChange}>
                {Array.from(Array(MAX_RATING)).map((_, index) => {
                  const rating = index + 1;
                  return (
                    <React.Fragment key={rating}>
                      <input
                        className="rating__input"
                        id={`star-${rating}`}
                        type="radio"
                        name="rating"
                        value={rating}
                        disabled={isLoading}
                      />
                      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div
              className="add-review__text"
              style={{backgroundColor: TEXTAREA_COLOR}}>
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                minLength={CommentLength.MIN}
                maxLength={CommentLength.MAX}
                onChange={onReviewChange}
                required
              ></textarea>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled={isSubmitDisabled}
                >
                  {isLoading ? reviewSubmitButton.sending : reviewSubmitButton.post}
                </button>
              </div>

            </div>
          </form>
          {isError &&
            <p style={{color: `red`}}>Error while sending data. Please, try again later.</p>
          }
        </div>
      </section>
    </>
  );
};

export default AddReview;

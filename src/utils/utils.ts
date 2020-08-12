import {Rating} from "../consts";

export const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};


export const getFilmById = (films, id) => {
  return films.find((film) => film.id === id);
};

export const getSimilarFilms = (films, activeFilm) => {
  return films.filter(
      (film) => film.genre === activeFilm.genre && film.id !== activeFilm.id
  );
};

export const getLevel = (rating) => {
  switch (true) {
    case (rating < 3):
      return Rating.BAD;
    case (rating >= 3 && rating < 5):
      return Rating.NORMAL;
    case (rating >= 5 && rating < 8):
      return Rating.GOOD;
    case (rating >= 8 && rating < 10):
      return Rating.VERY_GOOD;
  }
  return Rating.AWESOME;
};

export const formatRuntime = (runtime) => {
  let hours = Math.floor(runtime / 60);
  let minutes = Math.floor(((runtime / 60) - hours) * 100);

  if (minutes >= 60) {
    minutes = minutes - 60;
    hours += 1;
  }

  return `${hours}h ${minutes}m`;
};

export const formatReviewDate = (dateString, isForUser) => {
  const date = new Date(dateString);
  const dateTimeFormat = new Intl.DateTimeFormat(`en`, {year: `numeric`, month: `${isForUser ? `long` : `2-digit`}`, day: `2-digit`});
  const [{value: month},, {value: day},, {value: year}] = dateTimeFormat.formatToParts(date);
  return isForUser ? `${month} ${day}, ${year}` : `${year}-${month}-${day}`;
};

export const sliceComments = (comments) => {
  const sliceIndex = Math.ceil(comments.length / 2);
  const firstColComments = comments.slice(0, sliceIndex);
  const secondColComments = comments.slice(sliceIndex, comments.length);
  return [firstColComments, secondColComments];
};

export const formatDurationToTime = (duration: number) => {
  const time: number = Math.floor(duration);
  const hours: number = Math.floor(time / 3600);
  const minutes: number = Math.floor((time - (hours * 3600)) / 60);
  const seconds: number = time - (hours * 3600) - +(minutes * 60);

  return `${hours.toString().padStart(2, `0`)}:${minutes.toString().padStart(2, `0`)}:${seconds.toString().padStart(2, `0`)}`;
};

export const noop = () => {
  // Mock function for test props
};

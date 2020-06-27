import {getRandomElement, generateUniqueId} from "../utils/utils.js";

const FILMS_NUMBER = 8;

const RELEASE_DATE = {
  FIRST: 1895,
  LAST: 2020
};

const FILM_RATING = {
  MIN: 0,
  MAX: 10
};

const TITLES = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`
];

const POSTERS = [
  `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `bohemian-rhapsody.jpg`,
  `macbeth.jpg`,
  `aviator.jpg`,
  `we-need-to-talk-about-kevin.jpg`,
  `what-we-do-in-the-shadows.jpg`,
  `revenant.jpg`,
  `johnny-english.jpg`,
  `shutter-island.jpg`,
  `pulp-fiction.jpg`,
  `no-country-for-old-men.jpg`,
  `snatch.jpg`,
  `moonrise-kingdom.jpg`,
  `seven-years-in-tibet.jpg`,
  `midnight-special.jpg`,
  `war-of-the-worlds.jpg`,
  `dardjeeling-limited.jpg`,
  `orlando.jpg`,
  `mindhunter.jpg`,
  `midnight-special.jpg`
];

const GENRES = [
  `Sci-fi`,
  `Horror`,
  `Action`,
  `Drama`,
  `Comedy`,
  `Thriller`,
  `Fantasy`,
  `Adventure`,
  `War`,
  `Mystery`
];

const VIDEOS = [
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
];

export const TOP_FILM = {
  title: `The Grand Budapest Hotel`,
  poster: `the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  releaseDate: 2014
};


const getRandomRating = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(1);
};

const getRandomYear = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(0);
};

const getLevel = (rating) => {
  switch (true) {
    case (rating < 3):
      return `Bad`;
    case (rating >= 3 && rating < 5):
      return `Normal`;
    case (rating >= 5 && rating < 8):
      return `Good`;
    case (rating >= 8 && rating < 10):
      return `Very Good`;
  }
  return `Awesome`;
};

export const createFilms = () => {
  let films = [];

  for (let i = 0; i < FILMS_NUMBER; i++) {
    let rating = parseFloat(getRandomRating(FILM_RATING.MIN, FILM_RATING.MAX), 10);

    films.push({
      id: generateUniqueId(),
      background: `bg-the-grand-budapest-hotel.jpg`,
      title: getRandomElement(TITLES),
      genre: getRandomElement(GENRES),
      releaseDate: parseInt(getRandomYear(RELEASE_DATE.FIRST, RELEASE_DATE.LAST), 10),
      bigPoster: `the-grand-budapest-hotel-poster.jpg`,
      poster: getRandomElement(POSTERS),
      preview: getRandomElement(VIDEOS),
      rating,
      level: getLevel(rating),
      totalRatings: 240,
      director: `Wes Andreson`,
      starring: [
        `Bill Murray`,
        `Edward Norton`,
        `Jude Law`,
        `Willem Dafoe`
      ]
    });
  }
  return films;
};

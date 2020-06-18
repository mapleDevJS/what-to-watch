import {getRandomElement, generateUniqueId} from "../utils/utils.js";

const FILMS_NUMBER = 8;

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

export const TOP_FILM = {
  title: `The Grand Budapest Hotel`,
  poster: `the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  releaseDate: 2014
};

export const createFilms = () => {
  let films = [];
  for (let i = 0; i < FILMS_NUMBER; i++) {
    films.push({
      id: generateUniqueId(),
      title: getRandomElement(TITLES),
      poster: getRandomElement(POSTERS),
    });
  }
  return films;
};

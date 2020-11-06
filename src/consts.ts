export const BASE_URL = `https://5.react.pages.academy`;

export const ALL_GENRES = `All genres`;

export enum AppRoute {
  ROOT = `/`,
  LOGIN = `/login`,
  MY_LIST = `/mylist`,
  FILMS = `/films`,
  REVIEW = `/review`,
  PLAYER = `/player`,
}

export enum Rating {
  BAD = `Bad`,
  NORMAL = `Normal`,
  GOOD = `Good`,
  VERY_GOOD = `Very Good`,
  AWESOME = `Awesome`
}

export enum Tab {
  OVERVIEW = `Overview`,
  DETAILS = `Details`,
  REVIEWS = `Reviews`
}

export enum CommentLength {
  MIN = 50,
  MAX = 400
}

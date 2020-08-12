export default class Film {
  color: string;
  backgroundImg: string;
  description: string;
  director: string;
  genre: string;
  id: number;
  isFavorite: boolean;
  name: string;
  poster: string;
  previewImg: string;
  previewVideo: string;
  rating: number;
  released: number;
  runtime: number;
  scoresCount: number;
  starring: Array<string>;
  video: string;

  constructor(film) {
    this.color = film.background_color;
    this.backgroundImg = film.background_image;
    this.description = film.description;
    this.director = film.director;
    this.genre = film.genre;
    this.id = film.id;
    this.isFavorite = film.is_favorite;
    this.name = film.name;
    this.poster = film.poster_image;
    this.previewImg = film.preview_image;
    this.previewVideo = film.preview_video_link;
    this.rating = film.rating;
    this.released = film.released;
    this.runtime = film.run_time;
    this.scoresCount = film.scores_count;
    this.starring = film.starring;
    this.video = film.video_link;
  }

  static parse(film) {
    return Object.keys(film).length ? new Film(film) : {};
  }
}

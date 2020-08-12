export interface Film {
    name: string;
    genre: string;
    released: number;
    color: string;
    backgroundImg: string;
    poster: string;
    previewImg: string;
    id: number;
    description: string;
    rating: number;
    scoresCount: number;
    director: string;
    starring: Array<string>;
    runtime: number;
    previewVideo: string;
    video: string;
    isFavorite: boolean;
  }

export interface User {
    id: number;
    email: string;
    name: string;
    avatarSrc: string;
  }

export interface Comment {
    id: number;
    author: {
      id: number;
      name: string;
    };
    rating: number;
    text: string;
    date: string;
  }

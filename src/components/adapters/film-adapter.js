const filmAdapter = (film) => {
  return {
    color: film.background_color,
    backgroundImg: film.background_image,
    description: film.description,
    director: film.director,
    genre: film.genre,
    id: film.id,
    isFavourite: film.is_favorite,
    name: film.name,
    poster: film.poster_image,
    previewImg: film.preview_image,
    previewVideo: film.preview_video_link,
    rating: film.rating,
    released: film.released,
    runtime: film.run_time,
    scoresCount: film.scores_count,
    starring: film.starring,
    video: film.video_link,
  };
};

export default filmAdapter;

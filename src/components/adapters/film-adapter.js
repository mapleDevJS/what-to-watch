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

const filmAdapter = (film) => {
  return {
    color: film.background_color,
    bigPoster: film.background_image,
    description: film.background_description,
    director: film.director,
    genre: film.genre,
    id: film.id,
    isFavourite: film.is_favourite,
    title: film.name,
    poster: film.poster_image,
    previewImg: film.preview_image,
    preview: film.preview_video_link,
    rating: film.rating,
    releaseDate: film.released,
    runtime: film.run_time,
    totalRatings: film.scores_count,
    starring: film.starring,
    videoLink: film.video_link,
    level: getLevel(film.rating),
  };
};

export default filmAdapter;

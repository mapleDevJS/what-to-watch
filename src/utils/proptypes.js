import PropTypes from "prop-types";

export const filmPropTypes = {
  color: PropTypes.string,
  backgroundImg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isFavourite: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired,
  previewVideo: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  released: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  starring: PropTypes.array.isRequired,
  video: PropTypes.string.isRequired
};

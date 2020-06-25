import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {generateUniqueId} from "../../utils/utils.js";
import FilmCard from "../film-card/film-card.jsx";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredFilm: null
    };
  }

  render() {
    const {films, onTitleClick, onPosterClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return (
            <FilmCard
              key = {generateUniqueId()}
              film = {film}
              onTitleClick = {onTitleClick}
              onPosterClick = {onPosterClick}
              onCardHover = {(hoveredFilm) => {
                this.setState({
                  hoveredFilm
                });
              }}
            />);
        })}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        background: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        releaseDate: PropTypes.number.isRequired,
        bigPoster: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        level: PropTypes.string.isRequired,
        totalRatings: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.array.isRequired
      })
  ).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onPosterClick: PropTypes.func.isRequired
};

export default FilmsList;

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// import {connect} from "react-redux";

import films from "../../mocks/films.js";

const MAX_FILTERS = 10;

class Filters extends PureComponent {
  constructor(props) {
    super(props);

  }

  _getUniqueGenres() {
    const genres = [];
    films.map((film) => {
      genres.push(film.genre);
    });

    genres.unshift(`All genres`);

    return [...new Set(genres)];
  }

  render() {
    const {activeFilter, onFilterChange} = this.props;

    const filters = this._getUniqueGenres();

    return (
      <ul
        className="catalog__genres-list"
        onClick = {(evt) => {
          evt.preventDefault();
          onFilterChange(evt.target.textContent);
        }}
      >
        {
          filters.slice(0, MAX_FILTERS).map((filter, idx) => (
            <li
              key = {filter + idx}
              className = {
                `catalog__genres-item ${(filter === activeFilter) ? `catalog__genres-item--active` : ``}`}
            >
              <a href="#" className="catalog__genres-link">{filter}</a>
            </li>
          ))
        }
      </ul>
    );
  }
}

Filters.propTypes = {
  // films: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.string.isRequired,
  //       background: PropTypes.string.isRequired,
  //       title: PropTypes.string.isRequired,
  //       genre: PropTypes.string.isRequired,
  //       releaseDate: PropTypes.number.isRequired,
  //       bigPoster: PropTypes.string.isRequired,
  //       poster: PropTypes.string.isRequired,
  //       preview: PropTypes.string.isRequired,
  //       rating: PropTypes.number.isRequired,
  //       level: PropTypes.string.isRequired,
  //       totalRatings: PropTypes.number.isRequired,
  //       director: PropTypes.string.isRequired,
  //       starring: PropTypes.array.isRequired
  //     })
  // ).isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

// const mapStateToProps = (state) => {
//   return {
//     view: state.view,
//     activeFilm: state.activeFilm,
//     activeFilter: state.activeFilter,
//     films: state.films
//   };
// };

// export default connect(mapStateToProps)(Filters);
export default Filters;

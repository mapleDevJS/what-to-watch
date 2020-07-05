import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const MAX_FILTERS = 10;

class Filters extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {activeFilter, onFilterChange, filters} = this.props;

    // const filters = this._getUniqueGenres(films);

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
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Filters;

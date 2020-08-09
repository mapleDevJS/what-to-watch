import React from "react";
import PropTypes from "prop-types";

import {connect} from "react-redux";

import {getFilters} from "../../store/reducers/data/selectors";

import {Creator} from "../../store/reducers/films/actions.js";
import {getActiveFilter} from "../../store/reducers/films/selectors";

const MAX_FILTERS = 10;

const Filters = (props) => {
  const {activeFilter, onFilterChange, filters} = props;

  const onFilterChangeHandler = (evt) => {
    evt.preventDefault();
    if (evt.target.className === `catalog__genres-link`) {
      onFilterChange(evt.target.textContent);
    }
  };

  return (
    <ul
      className="catalog__genres-list"
      onClick = {onFilterChangeHandler}
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
};


Filters.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired
};
const mapStateToProps = (state) => ({
  filters: getFilters(state),
  activeFilter: getActiveFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (filter) => dispatch(Creator.filterFilms(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

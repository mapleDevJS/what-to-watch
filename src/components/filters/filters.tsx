import * as React from "react";

import {connect} from "react-redux";

import {getFilters} from "../../store/reducers/data/selectors";

import {Creator} from "../../store/reducers/films/actions";
import {getActiveFilter} from "../../store/reducers/films/selectors";


interface Props {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  filters: Array<string>;
}

const MAX_FILTERS = 10;

const Filters: React.FunctionComponent<Props> = (props: Props) => {
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

const mapStateToProps = (state) => ({
  filters: getFilters(state),
  activeFilter: getActiveFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (filter) => dispatch(Creator.filterFilms(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

import React from "react";

import {connect} from "react-redux";

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes.js";

import {Operation as DataOperation} from "../../store/reducers/data/data.js";

const MyListButton = (props) => {
  const {onMyListClick, film} = props;

  return (
    <button className="btn btn--list movie-card__button" type="button"
      onClick={() => {
        onMyListClick(film);
      }}
    >
      {film.isFavorite
        ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"/>
        </svg>
        :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"/>
        </svg>
      }
      <span>My list</span>
    </button>
  );
};

MyListButton.propTypes = {
  film: PropTypes.shape(filmPropTypes),
  onMyListClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMyListClick: (film) => dispatch(DataOperation.postFavoriteFilm(film))
  };
};

export default connect(null, mapDispatchToProps)(MyListButton);

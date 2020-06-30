import React from "react";
import PropTypes from "prop-types";


const ShowMore = (props) => {
  const {onShowMoreClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick = {onShowMoreClick}
      >
        Show more
      </button>
    </div>
  );
};

ShowMore.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired
};

export default ShowMore;

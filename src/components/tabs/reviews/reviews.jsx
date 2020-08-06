import React from "react";

// import {connect} from "react-redux";

import PropTypes from "prop-types";
import {commentPropTypes} from "../../../utils/proptypes";

import Review from "../../review/review.jsx";

import {sliceComments, generateUniqueId} from "../../../utils/utils.js";

const Reviews = (props) => {
  const {comments} = props;

  const slicedComments = sliceComments(comments);


  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        {slicedComments.map((slicedComment) => {
          return (
            <div key={generateUniqueId()} className="movie-card__reviews-col">
              {slicedComment.map((comment) => <Review key={generateUniqueId()} comment={comment}/>)}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

Reviews.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentPropTypes)).isRequired,
};

export default Reviews;

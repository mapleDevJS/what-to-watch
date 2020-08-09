import React from "react";

import {connect} from "react-redux";

import PropTypes from "prop-types";
import {commentPropTypes} from "../../utils/proptypes";

import {Operation as DataOperation} from "../../store/reducers/data/data.js";
import {getComments} from "../../store/reducers/data/selectors.js";

import {formatReviewDate} from "../../utils/utils.js";


const Review = (props) => {
  const {comment} = props;

  const {
    text,
    author,
    rating,
    date
  } = comment;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p
          className="review__text"
          style={
            {
              overflow: `hidden`,
              textOverflow: `ellipsis`
            }
          }
        >
          {text}
        </p>

        <footer className="review__details">
          <cite className="review__author">{author.name}</cite>
          <time
            className="review__date"
            dateTime={formatReviewDate(date, false)}
          >
            {
              formatReviewDate(date, true)
            }
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>

  );
};

Review.propTypes = {
  comment: PropTypes.shape(commentPropTypes).isRequired,
  loadComments: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {

  return {
    comments: getComments(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadComments: (id) => dispatch(DataOperation.loadComments(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Review);

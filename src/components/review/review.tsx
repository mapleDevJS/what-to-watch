import * as React from "react";

import {connect} from "react-redux";

import {Operation as DataOperation} from "../../store/reducers/data/data";
import {getComments} from "../../store/reducers/data/selectors";

import {formatReviewDate} from "../../utils/utils";

import {Comment} from "../../types";

interface Props {
  comment: Comment;
  loadComments: (id: number) => void;
}


const Review: React.FunctionComponent<Props> = (props: Props) => {
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

const mapStateToProps = (state) => {

  return {
    comments: getComments(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadComments: (id) => dispatch(DataOperation.loadComments(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Review);

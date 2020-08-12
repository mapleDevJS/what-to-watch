import * as React from "react";

import Review from "../../review/review";

import {sliceComments, generateUniqueId} from "../../../utils/utils";

import {Comment} from "../../../types";

interface Props {
  comments: Array<Comment>;
}

class Reviews extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  render() {

    const {comments} = this.props;
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
  }


}

export default Reviews;

import * as React from "react";
import {Subtract} from "utility-types";

import {connect} from 'react-redux';
import {Operation as DataOperation} from '../../store/reducers/data/data';

import {getAppLoadingStatus, getAppErrorStatus} from '../../store/reducers/data/selectors';
import {CommentLength} from '../../consts';

import {Film} from "../../types";

interface Props {
  film: Film;
  isLoading: boolean;
  isError: boolean;
  onReviewSubmit: (id: number, review: {rating: number; comment: string}) => void;
}

interface State {
  rating: number;
  comment: string;
  isSubmitDisabled: boolean;
}

interface InjectedProps {
  onSubmitClick: (evt: React.FormEvent<HTMLFormElement>) => void;
  onRatingChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onReviewChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const withReview = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectedProps>;

  class WithReview extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        rating: 5,
        comment: ``,
        isSubmitDisabled: true,
      };

      this._handleSubmitClick = this._handleSubmitClick.bind(this);
      this._handleReviewChange = this._handleReviewChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });
    }

    _handleReviewChange(evt) {
      const {isLoading} = this.props;

      this.setState({
        comment: evt.target.value,
        isSubmitDisabled: evt.target.value.length < CommentLength.MIN || evt.target.value.length > CommentLength.MAX || isLoading,
      });
    }

    _handleSubmitClick(evt) {
      const {film, onReviewSubmit} = this.props;
      const review = {
        rating: this.state.rating,
        comment: this.state.comment,
      };

      evt.preventDefault();
      onReviewSubmit(film.id, review);
    }

    render() {
      const {film} = this.props;

      return (
        <Component
          {...this.props}
          film={film}
          onSubmitClick={this._handleSubmitClick}
          onRatingChange={this._handleRatingChange}
          onReviewChange={this._handleReviewChange}
          isSubmitDisabled={this.state.isSubmitDisabled}
        />
      );
    }
  }

  const mapStateToProps = (state) => ({
    isLoading: getAppLoadingStatus(state),
    isError: getAppErrorStatus(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    onReviewSubmit: (id, review) => {
      dispatch(DataOperation.postFilmReview(id, review));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReview);
};

export default withReview;

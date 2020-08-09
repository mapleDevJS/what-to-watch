import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import {filmPropTypes} from "../../utils/proptypes";

import {connect} from 'react-redux';
import {Operation as DataOperation} from '../../store/reducers/data/data.js';

import {getAppLoadingStatus, getAppErrorStatus} from '../../store/reducers/data/selectors.js';
import {CommentLength} from '../../consts.js';

const withReview = (Component) => {
  class WithReview extends PureComponent {
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

  WithReview.propTypes = {
    film: PropTypes.shape(filmPropTypes).isRequired,
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    onReviewSubmit: PropTypes.func.isRequired,
  };

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

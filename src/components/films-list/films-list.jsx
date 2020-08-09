import React from "react";
import {connect} from "react-redux";

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes.js";

import FilmCard from "../film-card/film-card.jsx";
import withVideo from "../../hocs/with-video/with-video";

import {generateUniqueId} from "../../utils/utils.js";
import {getShownFilms} from "../../store/reducers/films/selectors.js";

const FilmsList = (props) => {
  const {films, shownFilms} = props;
  const FilmCardWrapped = withVideo(FilmCard);

  return (
    <>
        {films.slice(0, shownFilms).map((film) => {
          return (
            <FilmCardWrapped
              key = {generateUniqueId()}
              film = {film}
            />
          );
        })}
      </>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmPropTypes)).isRequired,
  shownFilms: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    shownFilms: getShownFilms(state),
  };
};

export default connect(mapStateToProps)(FilmsList);

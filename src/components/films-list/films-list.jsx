import React, {PureComponent} from "react";

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes.js";

import FilmCard from "../film-card/film-card.jsx";
import withVideo from "../hocs/with-video/with-video";

import {generateUniqueId} from "../../utils/utils.js";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onTitleClick, onPosterClick} = this.props;

    const FilmCardWrapped = withVideo(FilmCard);
    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return (
            <FilmCardWrapped
              key = {generateUniqueId()}
              film = {film}
              onTitleClick = {onTitleClick}
              onPosterClick = {onPosterClick}
            />
          );
        })}
      </div>
    );

  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmPropTypes)).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onPosterClick: PropTypes.func.isRequired
};

export default FilmsList;

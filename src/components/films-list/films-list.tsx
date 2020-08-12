import * as React from "react";
import {connect} from "react-redux";

import FilmCard from "../film-card/film-card";
import withVideo from "../../hocs/with-video/with-video";

import {generateUniqueId} from "../../utils/utils";
import {getShownFilms} from "../../store/reducers/films/selectors";

import {Film} from "../../types";

interface Props {
  films: Array<Film>;
  shownFilms: number;
}

const FilmsList: React.FunctionComponent<Props> = (props: Props) => {
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

const mapStateToProps = (state) => {
  return {
    shownFilms: getShownFilms(state),
  };
};

export default connect(mapStateToProps)(FilmsList);

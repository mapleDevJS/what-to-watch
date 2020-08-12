import * as React from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import FilmsList from "../films-list/films-list";
import Footer from "../footer/footer";

import {Operation as DataOperation} from "../../store/reducers/data/data";
import {getAppLoadingStatus} from "../../store/reducers/data/selectors";

import {AppRoute} from "../../consts";
import {Film} from "../../types";

interface Props {
  loadFavoriteFilms: () => void;
  films: Array<Film>;
  isAppLoading: boolean;
}


class MyList extends React.PureComponent<Props> {
  props: Props;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadFavoriteFilms();
  }

  render() {
    const {isAppLoading, films} = this.props;
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link
              to={AppRoute.ROOT}
              className="logo__link"
            >
              <Logo/>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <UserBlock/>

        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {
              isAppLoading ?
              <></> :
                <FilmsList
                  films = {films}
                />
            }

            {
              films.length
                ? ``
                : <h1 style={{marginLeft: `250px`}}>Add movies to favorites to watch later</h1>
            }
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAppLoading: getAppLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteFilms: () => dispatch(DataOperation.loadFavoriteFilms())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);

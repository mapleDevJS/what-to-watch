import React, {PureComponent} from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

import PropTypes from "prop-types";
import {filmPropTypes} from "../../utils/proptypes.js";

import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";
import FilmsList from "../films-list/films-list.jsx";
import Footer from "../footer/footer.jsx";

import {Operation as DataOperation} from "../../redux/reducers/data/data.js";
import {getAppLoadingStatus} from "../../redux/reducers/data/selectors.js";

import {AppRoute} from "../../consts.js";


class MyList extends PureComponent {
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

            <h1 style={{marginLeft: `250px`}}>Add movies to favorites to watch later</h1>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

MyList.propTypes = {
  loadFavoriteFilms: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(filmPropTypes)),
  isAppLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAppLoading: getAppLoadingStatus(state),
  // films: getFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteFilms: () => dispatch(DataOperation.loadFavoriteFilms())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);

import * as React from "react";
import {connect} from "react-redux";

import {getAppLoadingStatus} from "../../store/reducers/data/selectors";

import Overview from "./overview/overview";
import Details from "./details/details";
import Reviews from "./reviews/reviews";
import {Tab} from "../../consts";

import {Film, Comment} from "../../types";

interface Props {
  film: Film;
  onTabClick: (tab: string) => void;
  activeTab: string;
  comments: Array<Comment>;
}

interface Tabs {
  tabs: Array<Tab>;
}

class Tabs extends React.PureComponent<Props> {
  props: Props;

  constructor(props) {
    super(props);

    this.tabs = Object.values(Tab);
  }

  render() {
    const {film, activeTab, onTabClick} = this.props;

    return (
        <>
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                {this.tabs.map((tab) => {
                  return (
                    <li
                      key={tab}
                      className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`}>
                      <a
                        href="#"
                        className="movie-nav__link"
                        onClick={(evt) => {
                          evt.preventDefault();
                          onTabClick(tab);
                        }}
                      >
                        {tab}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {
              this._renderActiveTab(film, activeTab)
            }
        </>
    );
  }

  _renderActiveTab(film, activeTab) {
    switch (activeTab) {
      case Tab.OVERVIEW:
        return <Overview film = {film}/>;
      case Tab.DETAILS:
        return <Details film = {film}/>;
      case Tab.REVIEWS:
        return <Reviews comments = {this.props.comments}/>;
      default:
        return ``;
    }
  }
}

const mapStateToProps = (state) => {

  return {
    isAppLoading: getAppLoadingStatus(state),
  };
};

export default connect(mapStateToProps)(Tabs);

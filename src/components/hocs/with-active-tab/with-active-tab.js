import React, {PureComponent} from 'react';

import {Tab} from "../../../consts.js";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: Tab.OVERVIEW
      };

      this._onTabClickHandler = this._onTabClickHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        activeTab={this.state.activeTab}
        onTabClick={this._onTabClickHandler}
      />;
    }

    _onTabClickHandler(tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  return WithActiveTab;
};

export default withActiveTab;

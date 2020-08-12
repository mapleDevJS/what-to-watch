import * as React from "react";
import {Subtract} from "utility-types";

import {Tab} from "../../consts";

interface State {
  activeTab: string;
}

interface InjectedProps {
  onTabClick: () => void;
}

const withActiveTab = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithActiveTab extends React.PureComponent<T, State> {


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
        activeTab = {this.state.activeTab}
        onTabClick = {this._onTabClickHandler}
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

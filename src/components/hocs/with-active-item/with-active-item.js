import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: {},
      };

      this._setActiveItem = this._setActiveItem.bind(this);
    }

    _setActiveItem(activeItem) {
      this.setState({
        activeItem
      });
    }

    render() {
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        activeItem = {activeItem}
        setActiveItem = {this._setActiveItem}
      />;
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;

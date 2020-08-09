import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import PropTypes from "prop-types";

import {AuthorizationStatus} from "../../store/reducers/user/user.js";
import {getAuthorizationStatus} from "../../store/reducers/user/selectors.js";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus, redirectPath} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={redirectPath}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  redirectPath: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateRoute);

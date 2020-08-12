import * as React from "react";
import {Route, Redirect, RouteComponentProps} from "react-router-dom";
import {connect} from "react-redux";

import {AuthorizationStatus} from "../../store/reducers/user/user";
import {getAuthorizationStatus} from "../../store/reducers/user/selectors";

interface Props {
  authorizationStatus: string;
  exact: boolean;
  path: string;
  redirectPath: string;
  render: (routeProps: RouteComponentProps<number> | null) => null;
}

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateRoute);

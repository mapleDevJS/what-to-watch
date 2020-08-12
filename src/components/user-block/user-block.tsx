import * as React from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

import {AuthorizationStatus} from "../../store/reducers/user/user";
import {getAuthorizationStatus, getUserData} from "../../store/reducers/user/selectors";

import {AppRoute} from "../../consts";

import {User} from "../../types";

interface Props {
  authorizationStatus: string;
  user: User;
}

const UserBlock: React.FunctionComponent<Props> = (props: Props) => {

  const {authorizationStatus, user} = props;

  return (
    <div className="user-block">
      {
        authorizationStatus === AuthorizationStatus.AUTH ?
          <Link to={AppRoute.MY_LIST}>
            <div className="user-block__avatar">
              <img src={user.avatarSrc} alt="User avatar" width="63" height="63"/>
            </div>
          </Link> :
          <Link
            to={AppRoute.LOGIN}
            style={{cursor: `pointer`, textDecoration: `none`, color: `inherit`}}
          >
              Sign In
          </Link>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
    user: getUserData(state)
  };
};

export default connect(mapStateToProps)(UserBlock);

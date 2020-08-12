import {Action, Creator} from "./actions";
import history from "../../../history";

import User from "../../../adapters/user";

import {AppRoute} from "../../../consts";

export enum AuthorizationStatus {
  AUTH = `Auth`,
  NO_AUTH = `No auth`,
}

const initialState = {
  user: {},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.SET_AUTHORIZATION_STATUS:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });

    case Action.SET_AUTHORIZATION_ERROR:
      return Object.assign({}, state, {
        authorizationError: action.payload,
      });

    case Action.SET_USER_DATA:
      return Object.assign({}, state, {
        user: action.payload,
      });

    default:
      return state;
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(AppRoute.LOGIN)
      .then((response) => {
        dispatch(Creator.setAuthorizationStatus(AuthorizationStatus.AUTH));
        dispatch(Creator.setUserData(User.parse(response.data)));
      })
      .catch((err) => {
        dispatch(Creator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
        dispatch(Creator.setAuthorizationError(err));
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(AppRoute.LOGIN, {
      email: authData.login,
      password: authData.password,
    })
    .then((response) => {
      dispatch(Creator.setAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(Creator.setUserData(User.parse(response.data)));
      history.push(AppRoute.ROOT);
    })
    .catch((err) => {
      dispatch(Creator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
      dispatch(Creator.setAuthorizationError(err));
    });
  }
};

export {reducer, Operation};

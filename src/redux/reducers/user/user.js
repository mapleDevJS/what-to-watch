import {Action, Creator} from "./actions.js";
import history from "../../../history.js";

import {AppRoute} from "../../../consts.js";


export const AuthorizationStatus = {
  AUTH: `Auth`,
  NO_AUTH: `No auth`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationError: false,
  user: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });

    case Action.ERROR_AUTHORIZATION:
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
    return api.get(`/login`)
      .then((response) => {
        dispatch(Creator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(Creator.setUserData(response.data));
      })
      .catch((err) => {
        dispatch(Creator.requireAuthorization(AuthorizationStatus.NO_AUTH));
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
    .then((response) => {
      dispatch(Creator.setUserData(response.data));
      dispatch(Creator.requireAuthorization(AuthorizationStatus.AUTH));
      history.push(AppRoute.ROOT);
    })
    .catch((err) => {
      throw err;
    });
  }
};

export {reducer, Operation};

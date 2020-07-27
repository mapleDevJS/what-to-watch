import {Action, requireAuthorization} from "../../actions.js";

export const AuthorizationStatus = {
  AUTH: `Auth`,
  NO_AUTH: `No auth`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationError: false,
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

    default:
      return state;
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch((err) => {
      throw err;
    });
  },
};


export {reducer, Operation};

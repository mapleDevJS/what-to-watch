export const Action = {
  SET_AUTHORIZATION_STATUS: `Set authorization status`,
  SET_AUTHORIZATION_ERROR: `Set authorization error`,
  SET_USER_DATA: `Set user data`,
};

export const Creator = {
  setAuthorizationStatus: (status) => ({
    type: Action.SET_AUTHORIZATION_STATUS,
    payload: status,
  }),

  setAuthorizationError: (code) => ({
    type: Action.SET_AUTHORIZATION_ERROR,
    payload: code,
  }),

  setUserData: (userData) => ({
    type: Action.SET_USER_DATA,
    payload: userData,
  }),
};

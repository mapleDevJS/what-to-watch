import NameSpace from "../name-space.js";

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export const getAuthorizationError = (state) => state[NameSpace.USER].authorizationError;

export const getUserData = (state) => state[NameSpace.USER].user;

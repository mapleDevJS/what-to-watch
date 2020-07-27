import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../api.js';

import {reducer, AuthorizationStatus, Operation} from "./user.js";
import {Action, requireAuthorization} from "../../actions.js";

const api = createAPI(() => {});

describe(`Operaions User`, () => {
  it(`Should return checkAuth NO_AUTH`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const userCheckAuth = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return userCheckAuth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: Action.REQUIRED_AUTHORIZATION,
          payload: `Auth`,
        });
      });
  });
});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authorizationError: false,
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: Action.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: Action.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });
});

it(`Return authorizationError after change`, () => {
  expect(reducer({
    authorizationError: false,
  }, {
    type: Action.ERROR_AUTHORIZATION,
    payload: true,
  })).toEqual({
    authorizationError: true,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: Action.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: Action.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });
});

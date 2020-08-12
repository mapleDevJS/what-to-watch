import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../api';

import {reducer, AuthorizationStatus, Operation} from "./user";
import {Action, Creator} from "./actions";

import {user} from "../../../test-data/user";
import {noop} from "../../../utils/utils";

const initialState = {
  user: {},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationError: false,
};

describe(`User Reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change authorizationStatus by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: Action.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: Action.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: Action.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: Action.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });
  });

  it(`Reducer should show Auth Error`, () => {
    expect(reducer({
      authorizationError: false,
    }, {
      type: Action.SET_AUTHORIZATION_ERROR,
      payload: true,
    })).toEqual({
      authorizationError: true,
    });
  });

  it(`Reducer should ser user data`, () => {
    expect(reducer({
      user: {},
    }, {
      type: Action.SET_USER_DATA,
      payload: user,
    })).toEqual({
      user
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(Creator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH)).toEqual({
      type: Action.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(Creator.setAuthorizationStatus(AuthorizationStatus.AUTH)).toEqual({
      type: Action.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH,
    });
  });
});

describe(`Operations work correctly`, () => {
  it(`Operation should check authorization`, () => {
    const api = createAPI(noop);

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthorization = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return checkAuthorization(dispatch, () => noop, api)
          .then(() => {
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenCalledWith({
              type: Action.SET_AUTHORIZATION_STATUS,
              payload: `Auth`,
            });
          });
  });
});

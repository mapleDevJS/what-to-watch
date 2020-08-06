import axios from 'axios';
import history from './history';

import {BASE_URL, AppRoute} from "./consts";

const TIMEOUT = 5000;
const URL = `${BASE_URL}/wtw`;

const Error = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response, request} = err;

    switch (response.status) {
      case Error.UNAUTHORIZED:
        if (request.responseURL !== URL + `/login`) {
          history.push(AppRoute.LOGIN);
        }
        break;

      default:
        throw err;
    }

    onUnauthorized();
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

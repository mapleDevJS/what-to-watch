import axios from "axios";

const Error = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401
};

const URL = `https://4.react.pages.academy/wtw`;

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: URL,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
      // Запрос авторизации - это особый случай и важно дать понять приложению, что запрос был неудачным.
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

import axios from 'axios';

export const api = axios.create({
  baseURL: `https://4.react.pages.academy/wtw`,
  timeout: 5000,
  withCredentials: true,
});

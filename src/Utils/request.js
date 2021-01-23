import axios from 'axios';
import { stringify } from 'query-string';
import { camelizeKeys, decamelize, decamelizeKeys } from 'humps';
import { HOST } from '../Constants/requests';
import { removeAccessToken } from './tokenHandler';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response?.status) {
      case 401:
        removeAccessToken().then(() => {
          window.location.assign('/');
        });
        break;
      default:
        break;
    }

    return Promise.reject(error.response);
  }
);

axios.defaults.timeout = 5000;

const decamelizeThatDontBreaksFile = (object) => {
  if (object && !(object instanceof File)) {
    if (object instanceof Array) {
      return object.map((item) => decamelizeThatDontBreaksFile(item));
    }
    if (object instanceof FormData) {
      let formData = new FormData();
      for (const [key, value] of object.entries()) {
        formData.append(decamelize(key), value);
      }
      return formData;
    }
    if (typeof object === 'object') {
      return Object.keys(object).reduce(
        (acc, next) => ({
          ...acc,
          [decamelize(next)]: decamelizeThatDontBreaksFile(object[next]),
        }),
        {}
      );
    }
  }
  return object;
};

export function request(config) {
  config.headers = {
    'Content-Type': 'application/json',
    ...config.headers,
  };

  config.baseURL = HOST;
  config.transformResponse = [
    ...axios.defaults.transformResponse,
    (data) => camelizeKeys(data),
  ];
  config.transformRequest = [
    decamelizeThatDontBreaksFile,
    ...axios.defaults.transformRequest,
  ];
  config.paramsSerializer = function (params) {
    return stringify(decamelizeKeys(params));
  };
  return axios(config);
}

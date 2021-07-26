import { BASE_URL } from '~/consts';
import queryString from 'qs';

export const API_CONFIG = {
  baseURL: BASE_URL,
  paramsSerializer: (params: unknown) => queryString.stringify(params, { arrayFormat: 'brackets' }),
};

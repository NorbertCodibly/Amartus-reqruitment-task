import { BASE_URL } from '~/consts';
import qs from 'qs';

export const API_CONFIG = {
  baseURL: BASE_URL,
  paramsSerializer: (params: unknown) => qs.stringify(params, { arrayFormat: 'brackets' }),
};

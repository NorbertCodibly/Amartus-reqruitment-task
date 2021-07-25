import axios from 'axios';
import { INodeDto } from '~/shared/dto';
import { API_ROUTES } from './api.routes';
import { API_CONFIG } from './api.config';

export const http = axios.create(API_CONFIG);

const api = {
  fetchNodes: () => http.get<INodeDto[]>(API_ROUTES.nodes),
  saveNodes: (nodes: INodeDto[]) =>
    http.put(API_ROUTES.nodes, {
      nodes,
    }),
};

export default api;

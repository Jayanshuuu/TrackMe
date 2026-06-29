import { api } from './axios';

export const authApi = {
  login: () => api.post('/auth/login'),
  register: () => api.post('/auth/register'),
  logout: () => api.post('/auth/logout'),
};

import { api } from './axios';

export const applicationsApi = {
  getAll: () => api.get('/applications'),
  getById: (id: string) => api.get(`/applications/${id}`),
  create: () => api.post('/applications'),
  update: (id: string) => api.put(`/applications/${id}`),
  delete: (id: string) => api.delete(`/applications/${id}`),
};

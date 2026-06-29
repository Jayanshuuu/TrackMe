import { api } from './axios';

export const projectsApi = {
  getAll: () => api.get('/projects'),
  getById: (id: string) => api.get(`/projects/${id}`),
  create: () => api.post('/projects'),
  update: (id: string) => api.put(`/projects/${id}`),
  delete: (id: string) => api.delete(`/projects/${id}`),
};

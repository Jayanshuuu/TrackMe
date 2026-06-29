import { api } from './axios';

export const resumeApi = {
  get: () => api.get('/resume'),
  update: () => api.put('/resume'),
};

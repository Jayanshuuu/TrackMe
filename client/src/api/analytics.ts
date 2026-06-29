import { api } from './axios';

export const analyticsApi = {
  getSummary: () => api.get('/analytics/summary'),
};

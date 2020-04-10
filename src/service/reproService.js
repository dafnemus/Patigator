/* eslint-disable import/extensions */
import api from './api.js';

export const fetchRepro = (id) => api.get(`/api/audios=${id}`);

export const fetchAllRepro = () => api.get('/api/audios');

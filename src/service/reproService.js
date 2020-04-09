/* eslint-disable import/extensions */
import api from './api.js';

export const getRepro = (id) => api.get(`/audios=${id}`);

export const getAllRepro = () => api.get('/audios');

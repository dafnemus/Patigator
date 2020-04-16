/* eslint-disable import/extensions */
import api from './api.js';

export const getRepro = (id) => api.get(`/api/audios=${id}`);

export const getAllAudio = () => api.get('/api/audios');

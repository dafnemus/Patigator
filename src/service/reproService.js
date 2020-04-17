/* eslint-disable import/extensions */
import api from './api.js';

export const getAudioById = (id) => api.get(`/api/audios=${id}`);

export const getAllAudio = () => api.get('/api/audios');

export const putEditAudio = (data) => api.put('api/audios', data);

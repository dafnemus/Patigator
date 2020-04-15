import api from "./api.js";
export const getAudioById = id => api.get(`/api/audios=${id}`);
export const getAllAudio = () => api.get(`/api/audios`);

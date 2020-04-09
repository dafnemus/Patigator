import api from "./api.js";

export const getRepro = title => api.get(`/reproductor?title_like=${title}`);

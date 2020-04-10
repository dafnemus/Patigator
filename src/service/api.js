/* eslint-disable comma-dangle */
import { create } from 'apisauce';

const api = create({
  baseURL: process.env.REACT_APP_API_BLASE_UR,
});

export default api;

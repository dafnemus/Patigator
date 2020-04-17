/* eslint-disable comma-dangle */
import { create } from 'apisauce';

const api = create({
  baseURL: process.REACT_APP_API_BASE_URL,
});

export default api;

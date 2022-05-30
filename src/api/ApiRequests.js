import axios from 'axios';
import { constant } from './ApiConstants';

// Resusable requests template
export const ApiRequest = () => {
  const config = { baseURL: constant.baseUrl };
  const instance = axios.create(config);
  return instance;
};

export const login = (formData) => {
  return ApiRequest().post('/user/login', formData);
};

export const register = (formData) => {
  return ApiRequest().post('/user/create', formData);
};

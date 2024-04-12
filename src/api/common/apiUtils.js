import { API_BASE_URL } from '@/constants/Constants';
import { ApiClient, NonLoadingApiClient } from './apiClient';

export const get = (url, params) => {
  return ApiClient.get(`${API_BASE_URL}${url}`, params);
};

export const post = (url, data) => {
  return ApiClient.post(`${API_BASE_URL}${url}`, data);
};

export const put = (url, data) => {
  return ApiClient.put(`${API_BASE_URL}${url}`, data);
};

export const patch = (url, data) => {
  return ApiClient.patch(`${API_BASE_URL}${url}`, data);
};

export const del = (url, data) => {
  return ApiClient.delete(`${API_BASE_URL}${url}`, { data });
};

export const nonLoadingGet = (url, params) => {
  return NonLoadingApiClient.get(`${API_BASE_URL}${url}`, params);
};

export const nonLoadingPost = (url, data) => {
  return NonLoadingApiClient.post(`${API_BASE_URL}${url}`, data);
};

export const nonLoadingPut = (url, data) => {
  return NonLoadingApiClient.put(`${API_BASE_URL}${url}`, data);
};

export const nonLoadingDel = (url, data) => {
  return NonLoadingApiClient.delete(`${API_BASE_URL}${url}`, { data });
};

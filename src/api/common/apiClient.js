import interceptorsOf from '@/api/common/interceptors';
import { BASE_URL } from '@/constants/Constants';
import axios from 'axios';

const baseApi = axios.create({
  baseURL: BASE_URL,
  timeout: 360000,
  withCredentials: true,
});

const nonLoadingApi = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  withCredentials: true,
});

export const ApiClient = interceptorsOf(baseApi);
export const NonLoadingApiClient = interceptorsOf(nonLoadingApi);

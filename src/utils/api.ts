import axios from "axios";
import { getToken, removeToken } from "./token";
const baseUrl = import.meta.env.VITE_API_URL;

export const publicApi = axios.create({
  baseURL: baseUrl,
});

const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status === 401) {
      removeToken();
      window.location.href = "/auth/entrar";
      return;
    }

    return error;
  },
);

export default api;

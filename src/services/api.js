import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/api", // Set your base URL once here
});

// The Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;

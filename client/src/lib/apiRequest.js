import axios from "axios";

// TODO: Fix Netlify environment variable
const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

export default apiRequest;
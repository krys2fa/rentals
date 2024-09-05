import axios from "axios";

// TODO: Fix Netlify environment variable
console.log('REACT_APP_API_URL',process.env.REACT_APP_API_URL)
const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ||  'https://rentals-5dps.onrender.com/api',
  withCredentials: true,
});

export default apiRequest;
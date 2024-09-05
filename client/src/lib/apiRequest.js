import axios from "axios";

console.log(process.env.REACT_APP_API_URL)

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ||  'https://rentals-5dps.onrender.com',
  withCredentials: true,
});

export default apiRequest;
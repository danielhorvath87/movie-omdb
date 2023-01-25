import axios from 'axios';

const axiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {
      'Accept-Language': 'en',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return axiosInstance;
};

export default axiosInstance;

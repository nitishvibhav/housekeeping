import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const url = {
  base: 'http://97.74.86.231:3001/api/v1/en/',
};

// Initial headers with no token
const headers = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    "Authorization": '',
  },
};

const axiosFormDataConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    "Authorization": '',
  },
};

// Function to update token in headers
const updateToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      headers.headers.Authorization = `Bearer ${token}`;
      axiosFormDataConfig.headers.Authorization = `Bearer ${token}`;
      console.log('Updated token in headers:', token);
    }
  } catch (error) {
    console.error('Error updating token:', error);
  }
};

// Call updateToken initially to set headers
updateToken();

// Function to get config with custom headers
function getConfig(header = {}) {
  const config = { ...headers };
  config.headers = { ...config.headers, ...header };
  console.log('Config headers:', config.headers);
  return config;
}

// Axios request methods
const request = {
  get: async (path, header = {}) => {
    await updateToken(); // Ensure token is updated before request
    return axios.get(url.base + path, getConfig(header));
  },
  delete: async (path, header = {}) => {
    await updateToken(); // Ensure token is updated before request
    return axios.delete(url.base + path, getConfig(header));
  },
  post: async (path, data, header = {}) => {
    await updateToken(); // Ensure token is updated before request
    return axios.post(url.base + path, data, getConfig(header));
  },
  put: async (path, data, header = {}) => {
    await updateToken(); // Ensure token is updated before request
    return axios.put(url.base + path, data, getConfig(header));
  },
  patch: async (path, data, header = {}) => {
    await updateToken(); // Ensure token is updated before request
    return axios.patch(url.base + path, data, getConfig(header));
  },
  putFormData: async (path, data) => {
    await updateToken(); // Ensure token is updated before request
    return axios.put(url.base + path, data, axiosFormDataConfig);
  },
};

export { request, updateToken, getConfig };

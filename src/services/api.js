import axios from 'axios';

// If using emulator, change address to http://localhost:3333
const api = axios.create({
  baseURL: 'http://192.168.0.6:3333',
});

export default api;

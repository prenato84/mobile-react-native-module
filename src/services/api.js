import axios from 'axios';

// http://10.1.1.13:3333
const api = axios.create({
  baseUrl: 'http://10.0.2.2:3333',
});

export default api;

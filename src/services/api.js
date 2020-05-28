import axios from 'axios';

// If using real device, change address to http://MACHINE_LOCAL_IP:3333
// Example: http://192.168.0.10:3333
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

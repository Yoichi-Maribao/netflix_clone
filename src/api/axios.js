import axios from 'axios';

// create request from THDB
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;

import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocketmovies-api-bd2u.onrender.com',
});


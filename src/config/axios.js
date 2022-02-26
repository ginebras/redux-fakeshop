import axios from 'axios';

const fakeStoreAxios = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export default fakeStoreAxios;

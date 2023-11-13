import axios, { CanceledError } from 'axios';

const BASE_URL = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: BASE_URL,
});

export { CanceledError };

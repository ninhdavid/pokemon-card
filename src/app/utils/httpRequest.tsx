import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const get = async (path: string, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
};

export default httpRequest;

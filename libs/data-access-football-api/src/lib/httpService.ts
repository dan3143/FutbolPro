import axios from 'axios';

const url =
  process.env.NX_FOOTBALL_API_URL ??
  'https://api-football-v1.p.rapidapi.com/v3';
const headers = {
  'x-rapidapi-host': process.env.NX_FOOTBALL_API_HOST ?? '',
  'x-rapidapi-key': process.env.NX_FOOTBALL_API_KEY ?? '',
};

const get = (endpoint: string) => axios.get(`${url}/${endpoint}`, { headers });

export { get };

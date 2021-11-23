const url = process.env.NX_FOOTBALL_API_URL ?? '';
const headers = {
  'x-rapidapi-host': process.env.NX_FOOTBALL_API_HOST ?? '',
  'x-rapidapi-key': process.env.NX_FOOTBALL_API_KEY ?? '',
};

const get = (endpoint: string) =>
  fetch(`${url}/${endpoint}`, { headers: headers });

export { get };

import { get } from './httpService';
import { Country } from '@futbol-pro/types';

const getCountries = async (): Promise<Array<Country>> => {
  const response = await get('countries');
  const json = await response.json();
  return json.response;
};

export { getCountries };

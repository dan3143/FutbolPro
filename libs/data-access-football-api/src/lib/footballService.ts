import { get } from './httpService';
import { Country, Team, Venue } from '@futbol-pro/types';

interface TeamsResponse {
  team: Team;
  venue: Venue;
}

const fetchCountries = async (): Promise<Array<Country>> => {
  const response = await get('countries');
  const json = await response.json();
  return json.response;
};

const fetchTeams = async (country: string): Promise<Array<Team>> => {
  const response = await get(`teams?country=${country}`);
  const json = await response.json();
  return json.response.map((team: TeamsResponse) => team.team);
};

export { fetchCountries, fetchTeams };

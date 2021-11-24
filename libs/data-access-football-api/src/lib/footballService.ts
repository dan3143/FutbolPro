import { get } from './httpService';
import { Country, PlayersResponse, Team, Venue } from '@futbol-pro/types';

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

const fetchPlayers = async (teamId: number): Promise<PlayersResponse> => {
  const response = await get(`players/squads?team=${teamId}`);
  const json = await response.json();
  return json.response[0];
};

export { fetchCountries, fetchTeams, fetchPlayers };

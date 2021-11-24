import { get } from './httpService';
import { Country, PlayersResponse, Team, Venue } from '@futbol-pro/types';
import countriesJSON from '../mocks/countries.json';
import teamsJson from '../mocks/teams.json';
import playersJson from '../mocks/players.json';

interface TeamsResponse {
  team: Team;
  venue: Venue;
}

const from = process.env.NODE_ENV === 'production' ? 'api' : 'json';

const getCountriesFromJSON = async (): Promise<Array<Country>> =>
  new Promise((resolve, reject) => resolve(countriesJSON));

const getCountriesFromApi = async (): Promise<Array<Country>> => {
  const response = await get('countries');
  return response.data.response;
};

const fetchCountries = async (): Promise<Array<Country>> =>
  from === 'api' ? getCountriesFromApi() : getCountriesFromJSON();

const getTeamsFromApi = async (country: string): Promise<Array<Team>> => {
  const response = await get(`teams?country=${country}`);
  return response.data.response.map((team: TeamsResponse) => team.team);
};

const getTeamsFromJSON = async (country: string): Promise<Array<Team>> =>
  new Promise((resolve, reject) => {
    const team = teamsJson.find((team) => team.parameters.country === country);
    if (!team) {
      reject('Team not found');
    } else {
      resolve(team.response.map((team) => team.team));
    }
  });

const fetchTeams = async (country: string): Promise<Array<Team>> =>
  from === 'api' ? getTeamsFromApi(country) : getTeamsFromJSON(country);

const getPlayersFromApi = async (teamId: number): Promise<PlayersResponse> => {
  const response = await get(`players/squads?team=${teamId}`);
  return response.data.response[0];
};

const getPlayersFromJSON = async (teamId: number): Promise<PlayersResponse> =>
  new Promise((resolve, reject) => {
    const players = playersJson.find(
      (players) => Number.parseInt(players.parameters.team) === teamId
    );
    if (!players) {
      reject('No players found for that team');
    } else {
      resolve(players.response[0]);
    }
  });

const fetchPlayers = async (teamId: number): Promise<PlayersResponse> =>
  from === 'api' ? getPlayersFromApi(teamId) : getPlayersFromJSON(teamId);

export { fetchCountries, fetchTeams, fetchPlayers };

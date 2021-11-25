import { fetchCountries, fetchPlayers, fetchTeams } from './footballService';

const COLOMBIA_ID = 8;
const D_OSPINA = {
  id: 313,
  name: 'D. Ospina',
  age: 33,
  number: 1,
  position: 'Goalkeeper',
  photo: 'https://media.api-sports.io/football/players/313.png',
};

const COLOMBIA_OBJ = {
  name: 'Colombia',
  code: 'CO',
  flag: 'https://media.api-sports.io/flags/co.svg',
};

const COLOMBIA_TEAM_OBJ = {
  id: 8,
  name: 'Colombia',
  country: 'Colombia',
  founded: 1924,
  national: true,
  logo: 'https://media.api-sports.io/football/teams/8.png',
};

describe('Football service', () => {
  it('Should fetch countries', async () => {
    const countries = await fetchCountries();
    expect(countries).not.toHaveLength(0);
    expect(countries).toContainEqual(COLOMBIA_OBJ);
  });

  it("Should fetch country's teams", async () => {
    const teams = await fetchTeams('Colombia');
    expect(teams).not.toHaveLength(0);
    expect(teams).toContainEqual(COLOMBIA_TEAM_OBJ);
  });

  it("Should fetch team's players", async () => {
    const players = await fetchPlayers(COLOMBIA_ID);
    expect(players.players).not.toHaveLength(0);
    expect(players.players).toContainEqual(D_OSPINA);
  });
});

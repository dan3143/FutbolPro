import { fetchPlayers } from '@futbol-pro/data-access-football-api';
import { Player, PlayersResponse, TeamResponse } from '@futbol-pro/types';
import { useEffect, useState } from 'react';
import jsonData from '../mocks/players.json';

const getPlayers = (
  teamId: number,
  from = 'json'
): Promise<PlayersResponse> => {
  return from === 'api'
    ? fetchPlayers(teamId)
    : new Promise((resolve, reject) => resolve(jsonData.response[0]));
};

const from = process.env.NODE_ENV === 'development' ? 'json' : 'api';

const usePlayers = (teamId: number): [Array<Player>, TeamResponse, boolean] => {
  const [players, setPlayers] = useState<Array<Player>>([]);
  const [team, setTeam] = useState<TeamResponse>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getPlayers(teamId, from).then((response) => {
      setPlayers(response.players);
      setTeam(response.team);
      setIsLoading(false);
    });
    return () => {
      setIsLoading(true);
      setPlayers([]);
      setTeam(undefined);
    };
  }, [teamId]);

  return [players, team, isLoading];
};

export default usePlayers;

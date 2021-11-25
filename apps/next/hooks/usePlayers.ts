import { fetchPlayers } from '@futbol-pro/data-access-football-api';
import { Player, TeamResponse } from '@futbol-pro/types';
import { useEffect, useState } from 'react';

const usePlayers = (teamId: number): [Array<Player>, TeamResponse, boolean] => {
  const [players, setPlayers] = useState<Array<Player>>([]);
  const [team, setTeam] = useState<TeamResponse>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchPlayers(teamId).then((response) => {
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

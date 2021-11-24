import { fetchTeams } from '@futbol-pro/data-access-football-api';
import { Team } from '@futbol-pro/types';
import { useEffect, useState } from 'react';
import jsonData from '../mocks/teams.json';

const getTeams = (country: string, from = 'json'): Promise<Array<Team>> => {
  return from === 'api'
    ? fetchTeams(country)
    : new Promise((resolve, reject) =>
        resolve(jsonData.response.map((team) => team.team))
      );
};

const from = process.env.NODE_ENV === 'development' ? 'json' : 'api';
console.log(process.env.NODE_ENV);

const useTeams = (
  country: string
): [Array<Team>, (search: string) => void, boolean] => {
  const [teams, setTeams] = useState<Array<Team>>([]);
  const [filteredTeams, setFilteredTeams] = useState<Array<Team>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const filterTeams = (search: string) => {
    search = search.toLowerCase();
    const filtered = teams.filter((country) =>
      country.name.toLowerCase().startsWith(search)
    );
    setFilteredTeams(filtered);
  };

  useEffect(() => {
    getTeams(country, from).then((response) => {
      setTeams(response);
      setFilteredTeams(response);
      setIsLoading(false);
    });
    return () => {
      setTeams([]);
      setFilteredTeams([]);
      setIsLoading(true);
    };
  }, [country]);

  return [filteredTeams, filterTeams, isLoading];
};

export default useTeams;

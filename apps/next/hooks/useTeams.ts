import { fetchTeams } from '@futbol-pro/data-access-football-api';
import { Team } from '@futbol-pro/types';
import { useEffect, useState } from 'react';

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
    fetchTeams(country).then((response) => {
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

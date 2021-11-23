import { Country } from '@futbol-pro/types';
import { useEffect, useState } from 'react';
import { getCountries } from '@futbol-pro/data-access-football-api';

const useCountries = (): [
  Array<Country>,
  (search: string) => void,
  boolean
] => {
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [filteredCountries, setFilteredCountries] = useState<Array<Country>>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCountries().then((response) => {
      setCountries(response);
      setFilteredCountries(response);
      setIsLoading(false);
    });
    return () => {
      setCountries([]);
      setIsLoading(true);
    };
  }, []);

  const filterCountries = (search: string) => {
    search = search.toLowerCase();
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().startsWith(search)
    );
    setFilteredCountries(filtered);
  };

  return [filteredCountries, filterCountries, isLoading];
};

export default useCountries;

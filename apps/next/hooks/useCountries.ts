import { Country } from '@futbol-pro/types';
import { useEffect, useState } from 'react';
import { fetchCountries } from '@futbol-pro/data-access-football-api';
import jsonData from '../mocks/countries.json';

const getCountries = (from = 'json'): Promise<Array<Country>> => {
  return from === 'api'
    ? fetchCountries()
    : new Promise((resolve, reject) => resolve(jsonData.slice(0, 10)));
};

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

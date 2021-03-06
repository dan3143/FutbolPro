import useCountries from '../hooks/useCountries';
import { CountryInfo, Loading, SearchBar } from '@futbol-pro/ui';

const Countries = () => {
  const [countries, filterCountries, isLoading] = useCountries();
  const totalData = countries.length;
  return (
    <div className="p-10">
      <div>
        <SearchBar
          placeholder="Search for a country"
          filter={filterCountries}
        />
        <p className="mb-5 text-xl text-gray-700">
          Countries found: {totalData}
        </p>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {countries.map((country) => (
              <CountryInfo key={country.name} country={country} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Countries;

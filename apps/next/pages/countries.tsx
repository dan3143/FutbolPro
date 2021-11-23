import useCountries from '../hooks/useCountries';
import { Loading } from '@futbol-pro/ui';
import { CountryInfo } from '@futbol-pro/ui';

const Countries = () => {
  const [countries, filterCountries, isLoading] = useCountries();
  return (
    <div className="p-10">
      {isLoading ? (
        <div className="mt-16 flex justify-center">
          <Loading />
        </div>
      ) : (
        <div className="">
          <input
            className="mb-10 w-full shadow-md p-5 text-xl rounded"
            placeholder="Buscar país"
            type="text"
            onChange={(e) => filterCountries(e.target.value)}
          />
          <div className="grid grid-cols-4 gap-5">
            {countries.map((country) => (
              <CountryInfo key={country.name} country={country} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Countries;

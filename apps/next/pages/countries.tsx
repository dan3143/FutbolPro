import useCountries from '../hooks/useCountries';
import { Loading } from '@futbol-pro/ui';
import { CountryInfo } from '@futbol-pro/ui';

const Countries = () => {
  const [countries, filterCountries, isLoading] = useCountries();
  const totalData = countries.length;
  return (
    <div className="p-10">
      {isLoading ? (
        <div className="mt-16 flex justify-center">
          <Loading />
        </div>
      ) : (
        <div>
          <input
            className="mb-10 w-full p-5 text-xl rounded border-2 border-gray-300 focus:border-transparent"
            placeholder="Buscar país"
            type="text"
            onChange={(e) => filterCountries(e.target.value)}
          />
          <p className="mb-5 text-xl text-gray-700">
            Países encontrados: {totalData}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

import { FC } from 'react';
import { Country } from '@futbol-pro/types';
import Link from 'next/link';

interface CountryInfoProps {
  country: Country;
}

const CountryInfo: FC<CountryInfoProps> = ({ country }) => (
  <Link href={`/teams/${country.name}`}>
    <a href={`/teams/${country.name}`}>
      <article className="flex flex-col p-5 border bg-white border-gray-300 rounded-md ">
        <img src={country.flag} alt={country.name} className="mb-5 rounded" />
        <p className="text-gray-600 text-lg">{country.code}</p>
        <h3 className="font-bold text-2xl text-gray-900">{country.name}</h3>
      </article>
    </a>
  </Link>
);
export { CountryInfo };

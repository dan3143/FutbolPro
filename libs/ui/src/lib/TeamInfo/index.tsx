import { Team } from '@futbol-pro/types';
import { FC } from 'react';
import Link from 'next/link';

interface TeamInfoProps {
  className?: string;
  team: Team;
}

const TeamInfo: FC<TeamInfoProps> = ({ team, className }) => {
  return (
    <Link href={`/players/${team.id}`}>
      <a href={`/players/${team.id}`}>
        <article className="flex items-center border p-3 bg-white">
          <img
            src={team.logo}
            alt={team.name}
            className="hidden w-16 h-16 sm:block"
          />
          <div className="mx-4 hidden sm:block border-r"></div>
          <section className="flex-1 flex flex-col justify-center">
            <h4 className="text-xl text-gray-800 font-bold">{team.name}</h4>
            <span className="text-gray-700 block">{team.founded}</span>
          </section>
        </article>
      </a>
    </Link>
  );
};

export { TeamInfo };

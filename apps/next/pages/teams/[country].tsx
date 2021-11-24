import useTeams from '../../hooks/useTeams';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Loading, TeamInfo, SearchBar } from '@futbol-pro/ui';

const Teams: FC = () => {
  const router = useRouter();
  const country = router.query.country as string;
  const [teams, filterTeams, isLoading] = useTeams(country);
  const totalData = teams.length;
  return (
    <main className="p-5">
      <h2 className="font-bold text-3xl mb-10">Teams from {country}</h2>
      <SearchBar placeholder="Search a team" filter={filterTeams} />
      <p className="mb-5 text-xl text-gray-700">Teams found: {totalData}</p>
      <div className="gap-y-2 flex flex-col">
        {isLoading ? (
          <Loading />
        ) : (
          teams.map((team) => <TeamInfo key={team.id} team={team} />)
        )}
      </div>
    </main>
  );
};

export default Teams;

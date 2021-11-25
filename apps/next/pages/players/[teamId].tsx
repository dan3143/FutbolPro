import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Loading, PlayerInfo } from '@futbol-pro/ui';
import usePlayers from '../../hooks/usePlayers';

interface PlayersInterface {
  teamId: number;
}

const Players: FC<PlayersInterface> = ({ teamId }) => {
  const [players, team, isLoading] = usePlayers(teamId);
  const totalData = players.length;

  return (
    <main className="p-5">
      {team && (
        <header className="my-5 flex items-center gap-x-5">
          {
            // eslint-disable-next-line
            <img src={team.logo} alt={team.name} width={64} />
          }
          <h2 className="font-bold text-3xl">
            Players of {team.name}&apos;s team
          </h2>
        </header>
      )}

      <p className="mb-5 text-xl text-gray-700">Found players: {totalData}</p>
      <div className="gap-y-2 flex flex-col">
        {isLoading ? (
          <Loading />
        ) : (
          <section className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {players.map((player) => (
              <PlayerInfo key={player.id} player={player} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

const PlayersPage: FC = () => {
  const router = useRouter();
  const teamId = Number.parseInt(router.query.teamId as string);
  return <Players teamId={teamId} />;
};

export { Players };
export default PlayersPage;

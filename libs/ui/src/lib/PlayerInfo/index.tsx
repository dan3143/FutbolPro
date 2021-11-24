import { Player } from '@futbol-pro/types';
import { FC } from 'react';

interface PlayerInfoProps {
  player: Player;
}

const PlayerInfo: FC<PlayerInfoProps> = ({ player }) => {
  const { name, position, photo, age } = player;
  return (
    <article className="bg-white flex flex-col border items-center rounded-lg shadow-sm p-4">
      <img src={photo} alt={name} className="rounded-full border-2 mb-3" />
      <span className="text-2xl text-gray-700 font-bold">{name}</span>
      <span className="text-gray-600">{position}</span>
      {age && <span className="text-gray-500">Age: {age}</span>}
    </article>
  );
};

export { PlayerInfo };

import { Country, Player, Team } from '@futbol-pro/types';
import { render, screen } from '@testing-library/react';
import { PlayerInfo } from './PlayerInfo';
import { CountryInfo } from './CountryInfo';
import { TeamInfo } from './TeamInfo';
import '@testing-library/jest-dom';

const FLACAO: Player = {
  id: 0,
  name: 'Flacao García',
  age: 22,
  position: 'Attacker',
  photo:
    'https://caracoltv.brightspotcdn.com/dims4/default/c5cfeb9/2147483647/strip/true/crop/1312x967+0+0/resize/1000x737!/quality/90/?url=https%3A%2F%2Fcaracol-brightspot.s3-us-west-2.amazonaws.com%2Fassets%2Fgol%2Ffalcao_garcia_colombia_230420_cole.jpg',
  number: 9,
};

const ARALIA: Country = {
  code: 'AR',
  name: 'Aralia',
  flag: 'https://cdn1.neoskosmos.com/uploads/sites/2/2015/04/macedonia-flag-vergina.jpg',
};

const RAIMON: Team = {
  id: 0,
  name: 'Raimon',
  country: 'Japan',
  founded: 2008,
  logo: 'https://static.wikia.nocookie.net/inazuma-eleven/images/4/47/Raimon_emblem_new.png/revision/latest/scale-to-width-down/128?cb=20171115062613',
  national: false,
};

describe('UI', () => {
  it("Should render player's info", () => {
    render(<PlayerInfo player={FLACAO} />);
    expect(
      screen.getByRole('heading', { name: 'Flacao García' })
    ).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Age: 22')).toBeInTheDocument();
    expect(screen.getByText('Attacker')).toBeInTheDocument();
  });

  it("Should render country's info", () => {
    render(<CountryInfo country={ARALIA} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Aralia' })).toBeInTheDocument();
    expect(screen.getByText('AR')).toBeInTheDocument();
  });

  it("Should render team's info", () => {
    render(<TeamInfo team={RAIMON} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Raimon' })).toBeInTheDocument();
    expect(screen.getByText('2008')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Countries from '../pages/countries';
import Teams from '../pages/teams/[country]';
import Players from '../pages/players/[teamId]';

describe('Countries', () => {
  it('Should render countries', async () => {
    render(<Countries />);
    const colombia = await screen.findByRole('heading', { name: /colombia/i });
    expect(colombia).toBeInTheDocument();
  });

  it("Should show countries' flags", async () => {
    render(<Countries />);
    const flags = await screen.findAllByRole('img');
    expect(flags).not.toHaveLength(0);
  });

  it('Should filter countries', async () => {
    render(<Countries />);
    const searchInput = await screen.getByRole('textbox');
    const brazil = await screen.findByRole('heading', { name: /brazil/i });
    const colombia = await screen.findByRole('heading', { name: /colombia/i });
    userEvent.type(searchInput, 'braz');
    expect(searchInput).toBeInTheDocument();
    expect(brazil).toBeInTheDocument();
    expect(colombia).not.toBeInTheDocument();
  });
});

//eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
describe('Teams', () => {
  it("Should show country's teams", async () => {
    useRouter.mockImplementation(() => ({ query: { country: 'Colombia' } }));
    render(<Teams />);
    expect(
      screen.getByRole('heading', {
        name: /teams from colombia/i,
      })
    ).toBeInTheDocument();
    const colombiaTeam = await screen.findByRole('heading', {
      name: /colombia/i,
    });
    expect(colombiaTeam).toBeInTheDocument();
  });

  it('Should filter teams', async () => {
    useRouter.mockImplementation(() => ({ query: { country: 'Colombia' } }));
    render(<Teams />);
    const searchInput = screen.getByRole('textbox');
    const colombiaTeam = await screen.findByRole('heading', {
      name: /^colombia$/i,
    });
    userEvent.type(searchInput, 'bra');
    expect(colombiaTeam).not.toBeInTheDocument();
  });
});

describe('Players', () => {
  it("Should show team's players", async () => {
    useRouter.mockImplementation(() => ({ query: { teamId: 8 } }));
    render(<Players />);
    const tesillo = await screen.findByRole('heading', { name: 'W. Tesillo' });
    expect(tesillo).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Countries from '../pages/index';
import { Teams } from '../pages/teams/[country]';
import { Players } from '../pages/players/[teamId]';

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
});

describe('Teams', () => {
  it("Should show country's teams", async () => {
    render(<Teams country="Colombia" />);
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
});

describe('Players', () => {
  it("Should show team's players", async () => {
    render(<Players teamId={8} />);
    const tesillo = await screen.findByRole('heading', { name: 'W. Tesillo' });
    expect(tesillo).toBeInTheDocument();
  });
});

describe('Filters', () => {
  it('Should filter teams', async () => {
    render(<Teams country="Colombia" />);
    const searchInput = screen.getByRole('textbox');
    const colombiaTeam = await screen.findByRole('heading', {
      name: /^colombia$/i,
    });
    userEvent.type(searchInput, 'bra');
    expect(colombiaTeam).not.toBeInTheDocument();
  });

  it('Should filter teams with case insensitivity', async () => {
    render(<Teams country="Colombia" />);
    const searchInput = screen.getByRole('textbox');
    const colombiaTeam = await screen.findByRole('heading', {
      name: /^colombia$/i,
    });
    userEvent.type(searchInput, 'CoLoMbIa');
    expect(colombiaTeam).toBeInTheDocument();
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

  it('Should filter countries with case insesitivity', async () => {
    render(<Countries />);
    const searchInput = await screen.getByRole('textbox');
    const brazil = await screen.findByRole('heading', { name: /brazil/i });
    const colombia = await screen.findByRole('heading', { name: /colombia/i });
    userEvent.type(searchInput, 'BrAzIl');
    expect(searchInput).toBeInTheDocument();
    expect(brazil).toBeInTheDocument();
    expect(colombia).not.toBeInTheDocument();
  });
});

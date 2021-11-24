import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Countries from '../pages/countries';

describe('Countries', () => {
  it('should render countries', async () => {
    render(<Countries />);
    const colombia = await screen.findByRole('heading', { name: /colombia/i });
    expect(colombia).toBeInTheDocument();
  });

  it("should show countries' flags", async () => {
    render(<Countries />);
    const flags = await screen.findAllByRole('img');
    expect(flags).not.toHaveLength(0);
  });

  it('should filter countries', async () => {
    render(<Countries />);
    const searchInput = await screen.getByRole('textbox');
    const brazil = await screen.findByRole('heading', { name: /brazil/i });
    const colombia = await screen.findByRole('heading', { name: /colombia/i });
    userEvent.type(searchInput, 'braz');
    expect(brazil).toBeInTheDocument();
    expect(colombia).not.toBeInTheDocument();
  });
});

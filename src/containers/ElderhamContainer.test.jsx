import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ElderhamContainer from './ElderhamContainer';
import { MemoryRouter } from 'react-router';

// snapshot test all presentational components
// behavior test - on changing search refetch articles

describe('Elderham Container Tests', () => {
  it('should render a list of 25 villagers to the page', async () => {
    render(
      <MemoryRouter>
        <ElderhamContainer />
      </MemoryRouter>
    );

    await screen.findAllByRole('img');

    const ul = await screen.findByRole('list', {
      name: 'villagers',
    });
    expect(ul).toMatchSnapshot();
  });

  it('should render search results', async () => {
    render(
      <MemoryRouter>
        <ElderhamContainer />
      </MemoryRouter>
    );

    screen.findAllByRole('img');

    const input = await screen.findByLabelText('Search by Species');
    const button = await screen.findByRole('button', { name: 'search-submit' });
    const form = await screen.findByRole('form', { name: 'search-query' });

    expect(form).toMatchSnapshot();
    expect(button).toMatchSnapshot();

    await userEvent.type(input, 'pig');
    await userEvent.click(button);

    return waitFor(async () => {
      const searchResults = await screen.findByRole('list', {
        name: 'villagers',
      });
      expect(searchResults.childElementCount).toBe(1);
    });
  });
});

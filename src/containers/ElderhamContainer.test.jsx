import React from 'react';
import { render, screen } from '@testing-library/react';
import ElderhamContainer from './ElderhamContainer';
import { MemoryRouter } from 'react-router';

describe('Elderham Container Tests', () => {
  it('should render a list of 25 villagers to the page', async () => {
    render(
      <MemoryRouter>
        <ElderhamContainer />
      </MemoryRouter>
    );

    screen.findAllByRole('img');

    const ul = await screen.findByRole('list', { name: 'villagers' });
    expect(ul).toMatchSnapshot();
  });
});

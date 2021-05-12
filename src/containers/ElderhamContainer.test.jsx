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

    screen.getByText(
      "Oh, drumsticks... Looks like we didn't find what you were looking for right now...Sorry about that."
    );

    const ul = await screen.findByRole('list', { name: 'villagers' });
    expect(ul).toMatchSnapshot();
  });
});

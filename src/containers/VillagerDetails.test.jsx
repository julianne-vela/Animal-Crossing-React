import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import VillagerDetails from './VillagerDetails';

describe('Villager Details Test', () => {
  afterEach(() => cleanup());
  it('should render extended details about the selected villager', async () => {
    render(
      <VillagerDetails
        match={{
          params: {
            id: '5f5fb4bbbfd05c2aed82e462',
          },
        }}
      />
    );

    const details = await screen.findByRole('villagerDetails');
    expect(details).toMatchSnapshot();
  });
});

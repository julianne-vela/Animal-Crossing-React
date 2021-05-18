import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import VillagerContainer from './VillagerContainer';

describe('Villager Container Test', () => {
  afterEach(() => cleanup());
  it('should render extended details about the selected villager', async () => {
    render(
      <VillagerContainer
        match={{
          params: {
            _id: '5f5fb4bbbfd05c2aed82e462',
          },
        }}
      />
    );

    const details = await screen.findByRole('villagerDetails');
    expect(details).toMatchSnapshot();
  });
});

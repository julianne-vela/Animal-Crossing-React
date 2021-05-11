import React, { Component } from 'react';
import VillagerList from '../components/villagers/VillagerList';
import { findVillagers } from '../services/acnhApi';

export default class ElderHamContainer extends Component {
  state = {
    loading: true,
    villagers: [],
  };

  render() {
    const { loading, villagers } = this.state;
    {
      loading ? <h1>Loading...</h1> : <VillagerList villagers={villagers} />;
    }
  }
}

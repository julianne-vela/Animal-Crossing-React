import React, { Component } from 'react';
import VillagerList from '../components/villagers/VillagerList';
import { findVillagers } from '../services/acnhApi';
import '../components/villagers/villagers.css';

export default class ElderhamContainer extends Component {
  state = {
    loading: true,
    villagers: [],
  };

  async componentDidMount() {
    const villagers = await findVillagers();
    this.setState({
      villagers,
      loading: false,
    });
  }

  render() {
    const { loading, villagers } = this.state;
    if (loading)
      return (
        <p>
          Oh, drumsticks... Looks like we didn't find what you were looking for
          right now...Sorry about that.
        </p>
      );
    return <VillagerList villagers={villagers} />;
  }
}

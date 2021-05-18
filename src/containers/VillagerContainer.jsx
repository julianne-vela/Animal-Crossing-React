import React, { Component } from 'react';
import LoadScreen from '../components/app/LoadScreen';
import VillagerDetail from '../components/villagers/VillagerDetail';
import { findVillagerById } from '../services/acnhApi';

export default class VillagerDetails extends Component {
  state = {
    villagerObject: {},
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const villager = await findVillagerById(this.props.match.params.id);
    this.setState({
      villagerObject: villager,
      loading: false,
    });
  }

  render() {
    const { villagerObject, loading } = this.state;

    if (loading) return <LoadScreen />;
    return <VillagerDetail villager={villagerObject} />;
  }
}

import React, { Component } from 'react';
import VillagerDetail from '../components/villagers/VillagerDetail';
import { findVillagerById } from '../services/acnhApi';

export default class VillagerDetails extends Component {
  state = {
    villagerObject: {},
    loading: true,
  };

  async componentDidMount() {
    const villager = await findVillagerById(this.props.match.params.id);
    this.setState({
      villagerObject: villager,
      loading: false,
    });
  }

  render() {
    const { villagerObject, loading } = this.state;

    return (
      <div>
        {loading ? (
          <p>Dodo One, this is Dodo Tower. Do you copy?</p>
        ) : (
          <VillagerDetail villager={villagerObject} />
        )}
      </div>
    );
  }
}

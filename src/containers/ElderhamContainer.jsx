import React, { Component } from 'react';
import VillagerList from '../components/villagers/VillagerList';
import { findVillagers, searchBySpecies } from '../services/acnhApi';
import LoadScreen from '../components/app/LoadScreen';
import Controls from '../components/search/Controls';

export default class ElderhamContainer extends Component {
  state = {
    loading: true,
    villagers: [],
    searchQuery: '',
  };

  async componentDidMount() {
    const villagers = await findVillagers();

    this.setState({
      villagers,
      loading: false,
    });
  }

  handleQueryChange = ({ target }) => {
    this.setState({ searchQuery: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const villagers = await searchBySpecies(this.state.searchQuery);
    this.setState({
      loading: false,
      villagers,
    });
  };
  render() {
    const { loading, villagers, searchQuery } = this.state;

    if (loading) return <LoadScreen />;

    return (
      <>
        <Controls
          onSubmit={this.handleSubmit}
          species={searchQuery}
          onInputChange={this.handleQueryChange}
        />
        <VillagerList villagers={villagers} />
      </>
    );
  }
}

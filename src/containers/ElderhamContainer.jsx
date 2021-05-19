import React, { Component } from 'react';
import VillagerList from '../components/villagers/VillagerList';
import { findVillagers, searchBySpecies } from '../services/acnhApi';
import LoadScreen from '../components/app/LoadScreen';
import Controls from '../components/search/Controls';
import style from '../components/styles.css';

export default class ElderhamContainer extends Component {
  state = {
    loading: false,
    villagers: [],
    searchQuery: '',
  };

  async componentDidMount() {
    this.setState({ loading: true });
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

    const { searchQuery } = this.state;

    const villagers = await findVillagers();
    this.setState({ villagers });

    const villagerList = await searchBySpecies(searchQuery, villagers);

    this.setState({
      villagers: villagerList,
      loading: false,
      searchQuery: '',
    });
  };

  render() {
    const { loading, villagers, searchQuery } = this.state;

    if (loading) return <LoadScreen />;

    return (
      <main className={style.mainContainer}>
        <Controls
          onSubmit={this.handleSubmit}
          //   species={searchQuery}
          onInputChange={this.handleQueryChange}
        />
        <VillagerList villagers={villagers} />
      </main>
    );
  }
}

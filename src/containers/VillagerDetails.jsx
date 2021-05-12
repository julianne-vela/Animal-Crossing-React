import React, { Component } from 'react';
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
    const {
      name,
      japaneseName,
      image,
      species,
      birthday,
      favSong,
      quote,
      personality,
      style,
    } = this.state.villagerObject;

    return (
      <main role="villagerDetails">
        <label>{name}</label>
        <label>{japaneseName}</label>
        <img src={image} alt={name} />
        <ul>
          <li>{species}</li>
          <li>{birthday}</li>
          <li>{favSong}</li>
          <li>{quote}</li>
          <li>{personality}</li>
          <li>{style}</li>
        </ul>
        <a href="/">Back to List</a>
      </main>
    );
  }
}

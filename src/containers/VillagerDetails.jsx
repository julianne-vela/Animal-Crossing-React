import React, { Component } from 'react';

export default class VillagerDetails extends Component {
  state = {
    villagerObject: {},
    loading: true,
  };

  async componentDidMount() {
    const villager = await findById(this.props.match.params._id);
  }

  render() {
    return (
      <main className="villagerDetails">
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
        <Link to="/">Back to List</Link>
      </main>
    );
  }
}

// VillagerDetails.propTypes = {
//   name: PropTypes.string.isRequired,
//   japaneseName: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   species: PropTypes.string.isRequired,
//   birthday: PropTypes.string.isRequired,
//   favSong: PropTypes.string.isRequired,
//   quote: PropTypes.string.isRequired,
//   personality: PropTypes.string.isRequired,
//   style: PropTypes.string.isRequired,
// };

// export default VillagerDetails;

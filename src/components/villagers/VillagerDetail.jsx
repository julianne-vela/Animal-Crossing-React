import React from 'react';
// import PropTypes from 'prop-types';

function VillagerDetail({ villager }) {
  return (
    <main role="villagerDetails">
      <label>{villager.name}</label>
      <label>{villager.japaneseName}</label>
      <img src={villager.image} alt={villager.name} />
      <ul>
        <li>{villager.species}</li>
        <li>{villager.birthday}</li>
        <li>{villager.favSong}</li>
        <li>{villager.quote}</li>
        <li>{villager.personality}</li>
        <li>{villager.style}</li>
      </ul>
      <a href="/">Back to List</a>
    </main>
  );
}

// VillagerDetail.propTypes = {
//   birthday: PropTypes.string.isRequired,
//   favSong: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   japaneseName: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   personality: PropTypes.string.isRequired,
//   quote: PropTypes.string.isRequired,
//   species: PropTypes.string.isRequired,
//   style: PropTypes.string.isRequired,
// };

export default VillagerDetail;

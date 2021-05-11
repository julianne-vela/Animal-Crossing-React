import React from 'react';
import PropTypes from 'prop-types';

function VillagerList({ villagers }) {
  return (
    <ul aria-label="villagers">
      {villagers.map((villager) => (
        <li key={villager.id}>
          <Villager
            name={villager.name}
            image={villager.photo}
            species={villager.species}
          />
        </li>
      ))}
    </ul>
  );
}

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VillagerList;

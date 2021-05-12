import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';

const VillagerList = ({ villagers }) => {
  return (
    <ul aria-label="villagers" className="villagersList">
      {villagers.map((villager) => (
        <a href={`villagers/${villager.id}`} key={villager.id}>
          <li>
            <Villager
              name={villager.name}
              image={villager.image}
              species={villager.species}
            />
          </li>
        </a>
      ))}
    </ul>
  );
};

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

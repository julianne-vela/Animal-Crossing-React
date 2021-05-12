import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ name, species, image }) => {
  return (
    <div className="villager">
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>{species}</p>
    </div>
  );
};

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Villager;

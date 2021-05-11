import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ name, species, photo }) => {
  return (
    <>
      <p>{name}</p>
      <img src={photo} alt={name} />
      <p>{species}</p>
    </>
  );
};

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Villager;

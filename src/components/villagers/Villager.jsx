import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Villager = ({ name, species, image }) => {
  return (
    <Link to={`villagers/${name}`}>
      <div className="villager">
        <p>{name}</p>
        <img src={image} alt={name} />
        <p>{species}</p>
      </div>
    </Link>
  );
};

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Villager;

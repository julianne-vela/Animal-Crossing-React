import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles.css';

const Villager = ({ name, species, image }) => {
  return (
    <article className={style.villagerCard}>
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>{species}</p>
    </article>
  );
};

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Villager;

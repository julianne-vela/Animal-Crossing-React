import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';
import style from '../styles.css';
import { Link } from 'react-router-dom';

const VillagerList = ({ villagers }) => {
  return (
    <ul aria-label="villagers" className={style.villagersList}>
      {villagers.map((villager) => (
        <li className={style.cardBox} key={villager.id}>
          <Link to={`villagers/${villager.id}`}>
            <Villager
              name={villager.name}
              image={villager.image}
              species={villager.species}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VillagerList;

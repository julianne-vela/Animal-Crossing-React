import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';
import { Link } from 'react-router-dom';
import style from './villagers.css';

const VillagerList = ({ villagers }) => {
  return (
    <ul aria-label="villagers" className={style.villagersList}>
      {villagers.map((villager) => (
        <Link to={`villagers/${villager.id}`} key={villager.id}>
          <li>
            <Villager
              name={villager.name}
              image={villager.image}
              species={villager.species}
            />
          </li>
        </Link>
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
      personality: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
      //   gender: PropTypes.string.isRequired,
      //   hobby: PropTypes.string.isRequired,
      //   catchPhrase: PropTypes.string.isRequired,
      //   icon: PropTypes.string.isRequired,
      //   bubbleColor: PropTypes.string.isRequired,
      //   textColor: PropTypes.string.isRequired,
      //   saying: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VillagerList;

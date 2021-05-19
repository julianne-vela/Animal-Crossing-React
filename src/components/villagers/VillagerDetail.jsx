import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles.css';

const VillagerDetail = ({ villager }) => {
  return (
    <section className={style.villagerCard} aria-label="villagerDetails">
      <label>Hi, I'm {villager.name}!</label>
      <img src={villager.image} alt={villager.name} />
      <span>
        I'm a {villager.species} and my birthday is {villager.birthday}! I love
        listening to {villager.favSong} while I'm {villager.skill}. I'm pretty{' '}
        {villager.personality} and always say {villager.quote}. Well, it was
        nice chatting! Bye!
      </span>
      <a href="/">Back to List</a>
    </section>
  );
};

VillagerDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  favSong: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

export default VillagerDetail;

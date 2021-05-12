import React from 'react';
import PropTypes from 'prop-types';

function VillagerDetail({
  name,
  japaneseName,
  image,
  species,
  birthday,
  favSong,
  quote,
  personality,
  style,
}) {
  return (
    <main role="villagerDetails">
      <label>{name}</label>
      <label>{japaneseName}</label>
      <img src={image} alt={name} />
      <ul>
        <li>{species}</li>
        <li>{birthday}</li>
        <li>{favSong}</li>
        <li>{quote}</li>
        <li>{personality}</li>
        <li>{style}</li>
      </ul>
      <a href="/">Back to List</a>
    </main>
  );
}

VillagerDetail.propTypes = {};

export default VillagerDetail;

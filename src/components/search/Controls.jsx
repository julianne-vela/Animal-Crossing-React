import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ species, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="search-query">Search by Species</label>
      <input
        type="text"
        id="search-query"
        value={species}
        onChange={onInputChange}
      />
      <button aria-label="search-submit">Search</button>
    </form>
  );
};

Controls.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  species: PropTypes.string.isRequired,
};

export default Controls;

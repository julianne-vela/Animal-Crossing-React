import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} aria-label="search-query">
      <label htmlFor="search-query">Search by Species</label>
      <input type="search" id="search-query" onChange={onInputChange} />
      <button aria-label="search-submit">Search</button>
    </form>
  );
};

Controls.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Controls;

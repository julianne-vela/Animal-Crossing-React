import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <h1>Welcome to Elderham</h1>
      <Link to="/:name">Villagers</Link>
    </nav>
  );
};

export default Header;

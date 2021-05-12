import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <h1>Welcome to Elderham</h1>
    </header>
  );
};

export default Header;

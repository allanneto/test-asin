import React from 'react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

function Header({ quantity }) {
  return (
    <header className="header">
      <Link to="/">
        <FiHome size={30} />
      </Link>
      Total of pokemon: {quantity}
    </header>
  );
}

export default Header;

// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button>Developer Portfolio Manager</button>
      </Link>
      {/* Other navigation links... */}
    </nav>
  );
}

export default Navbar;
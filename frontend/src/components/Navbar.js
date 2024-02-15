import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Developer Portfolio Manager</Link>
      <ul>
        <li><Link to="/projects" className="nav-link">Projects</Link></li>
        <li><Link to="/project/1" className="nav-link">Project Details</Link></li>
        <li><Link to="/user/1" className="nav-link">User Profile</Link></li>
        <li><Link to="/new-project" className="nav-link">New Project</Link></li>
        <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

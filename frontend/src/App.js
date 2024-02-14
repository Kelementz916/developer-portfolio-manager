// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Developer Portfolio Manager</h1>
        <nav>
          <ul>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/project/1">Project Details</Link></li>
            <li><Link to="/user/1">User Profile</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import UserProfile from './components/UserProfile';
import ProjectForm from './components/ProjectForm';
import EditProjectForm from './components/EditProjectForm'; // Import the new component

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Developer Portfolio Manager</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/project/1">Project Details</Link></li>
            <li><Link to="/user/1">User Profile</Link></li>
            <li><Link to="/new-project">New Project</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProjectList />} /> {/* Add this line */}
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/new-project" element={<ProjectForm />} />
          <Route path="/edit-project/:id" element={<EditProjectForm />} /> {/* Add a route for the edit project form */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
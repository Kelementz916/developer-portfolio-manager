import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails'; // Renamed for consistency
import UserProfile from './components/UserProfile';
import ProjectForm from './components/ProjectForm';
import EditProjectForm from './components/EditProjectForm';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="header">
          <h1><Link to="/" className="nav-link">Developer Portfolio Manager</Link></h1>
          <ul className="navbar">
            <li><Link to="/projects" className="nav-link">Projects</Link></li>
            <li><Link to="/project/1" className="nav-link">Project Details</Link></li>
            <li><Link to="/user/1" className="nav-link">User Profile</Link></li>
            <li><Link to="/new-project" className="nav-link">New Project</Link></li>
            <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
          </ul>
        </nav>
        <main className="main">
          <Routes>
            <Route path="/" element={<ProjectList />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/new-project" element={<ProjectForm />} />
            <Route path="/edit-project/:id" element={<EditProjectForm />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>Made by Kevin</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;

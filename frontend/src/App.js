import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import UserProfile from './components/UserProfile';
import ProjectForm from './components/ProjectForm';
import EditProjectForm from './components/EditProjectForm';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-500 text-white p-4">
          <h1 className="text-2xl"><Link to="/" className="text-white no-underline">Developer Portfolio Manager</Link></h1>
        </header>
        <nav className="p-4">
          <ul className="flex space-x-4">
            <li><Link to="/projects" className="text-blue-500 hover:text-blue-700">Projects</Link></li>
            <li><Link to="/project/1" className="text-blue-500 hover:text-blue-700">Project Details</Link></li>
            <li><Link to="/user/1" className="text-blue-500 hover:text-blue-700">User Profile</Link></li>
            <li><Link to="/new-project" className="text-blue-500 hover:text-blue-700">New Project</Link></li>
            <li><Link to="/signup" className="text-blue-500 hover:text-blue-700">Sign Up</Link></li>
          </ul>
        </nav>
        <main className="flex-grow p-4">
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
        <footer className="bg-blue-500 text-white p-4">
          <p>© 2022 My Portfolio</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
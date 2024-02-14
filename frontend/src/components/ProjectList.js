// frontend/src/components/ProjectList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/projects') // Updated fetch URL
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/api/projects/${id}`, { // Updated fetch URL
      method: 'DELETE',
    })
    .then(() => {
      setProjects(projects.filter(project => project._id !== id));
    })
    .catch(error => console.error('Error deleting project:', error));
  };

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project._id}>
            <Link to={`/project/${project._id}`}>{project.title}</Link>
            <button onClick={() => handleDelete(project._id)}>Delete</button>
            <Link to={`/edit-project/${project._id}`}>Edit</Link> {/* This is the "Edit" link */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
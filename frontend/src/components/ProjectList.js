import React, { useEffect, useState } from 'react';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from backend
    // Example:
    // fetch('/api/projects')
    //   .then(response => response.json())
    //   .then(data => setProjects(data))
    //   .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project._id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

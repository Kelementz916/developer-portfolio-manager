import React, { useEffect, useState } from 'react';

function ProjectGrid() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      {projects.map(project => (
        <div key={project._id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
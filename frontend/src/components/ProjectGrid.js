import React from 'react';

const projects = [
  { id: 1, name: 'Project 1', description: 'This is project 1' },
  { id: 2, name: 'Project 2', description: 'This is project 2' },
  // Add more projects as needed
];

function ProjectGrid() {
  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
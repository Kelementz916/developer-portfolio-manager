// frontend/src/components/ProjectDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Replace this URL with the URL to your backend
    fetch(`http://localhost:3000/projects/${id}`)
      .then(response => response.json())
      .then(data => setProject(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDetails;
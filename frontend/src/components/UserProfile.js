// frontend/src/components/UserProfile.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState({ projects: [] });

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));
  }, [id]);

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>Projects</h3>
      <ul>
        {user.projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
// frontend/src/components/UserProfile.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams(); // Changed from id to userId
  const [user, setUser] = useState({ projects: [] });

  useEffect(() => {
    fetch(`http://localhost:3000/users/${userId}`) // Changed from id to userId
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));
  }, [userId]); // Changed from id to userId

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>Projects</h3>
      <ul>
        {user.projects.map((project, index) => (
          <li key={index}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
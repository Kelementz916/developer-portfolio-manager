// frontend/src/components/UserProfile.js

import React from 'react';

const user = { id: 1, name: 'User 1', projects: ['Project 1', 'Project 2'] };

function UserProfile() {
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

// frontend/src/components/EditProjectForm.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditProjectForm() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setDescription(data.description);
      })
      .catch(error => console.error('Error fetching project:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Update Project</button>
    </form>
  );
}

export default EditProjectForm;
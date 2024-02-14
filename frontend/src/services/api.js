// api.js
export async function fetchProjects() {
    try {
      const response = await fetch('http://localhost:3000/api/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  }
  
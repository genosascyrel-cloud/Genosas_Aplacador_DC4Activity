import { useState } from 'react';
import { api } from './api';

export default function AddProjectForm({ projects, setProjects }) {
  const [name, setName] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await api('/projects', {
        method: 'POST',
        body: JSON.stringify({ name }),
      });
      setProjects([...projects, { ...data.data, tasks_count: 0 }]);
      setName('');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New project name"
      />
      <button type="submit">Add project</button>
    </form>
  );
}
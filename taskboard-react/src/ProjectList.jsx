import { useEffect } from 'react';
import { api } from './api';

export default function ProjectList({ projects, setProjects }) {
  useEffect(() => {
    api('/projects')
      .then((data) => setProjects(data.data))
      .catch((err) => console.error(err));
  }, [setProjects]);

  return (
    <ul>
      {projects.map((p) => (
        <li key={p.id}>
          {p.name} ({p.tasks_count ?? 0} tasks)
        </li>
      ))}
    </ul>
  );
}
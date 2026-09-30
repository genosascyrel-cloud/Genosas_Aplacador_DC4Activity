import { useState } from 'react';
import LoginForm from './LoginForm';
import ProjectList from './ProjectList';
import AddProjectForm from './AddProjectForm';
import LogoutButton from './LogoutButton';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [projects, setProjects] = useState([]);

  if (!token) {
    return <LoginForm onLogin={() => setToken(localStorage.getItem('token'))} />;
  }

  return (
    <div>
      <h1>TaskBoard</h1>
      <LogoutButton
        onLogout={() => {
          setToken(null);
          setProjects([]);
        }}
      />
      <ProjectList projects={projects} setProjects={setProjects} />
      <AddProjectForm projects={projects} setProjects={setProjects} />
    </div>
  );
}
import { api } from './api';

export default function LogoutButton({ onLogout }) {
  async function handleClick() {
    try {
      await api('/logout', { method: 'POST' });
    } catch (err) {
      console.error(err);
    }
    localStorage.removeItem('token');
    onLogout();
  }

  return <button onClick={handleClick}>Log out</button>;
}
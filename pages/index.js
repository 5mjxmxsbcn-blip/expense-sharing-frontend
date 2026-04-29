import { useEffect, useState } from "react";

const API = "https://expense-sharing-backend-production.up.railway.app";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API}/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Expense App</h1>

      <h2>Users</h2>
      {users.map(u => (
        <div key={u.id}>{u.name}</div>
      ))}
    </div>
  );
}

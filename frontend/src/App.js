import React, { useState } from 'react';
import axios from 'axios';
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const handleLogin = async () => {
    try { const res = await axios.post('/api/auth/login', { email, password }); setToken(res.data.token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  return ( <div className="App"> <h1>Login</h1> <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/> <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/> <button onClick={handleLogin}>Login</button> {token && <p>Logged in with token: {token}</p>} </div> );
}
export default App;

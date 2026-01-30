import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/HospitalManagement.scss';
import {service} from "../../service";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Here you would typically call an authentication service
    // For demonstration purposes, we'll just log the credentials
    console.log(`Logging in with username: ${username}, password: ${password}`);

    const response = await service.post('/login', { email: username, password });
    console.log(response);
    if (!response.success) {
      setError(response.message);
      return;
    } else {
      if (response.message)
        alert(response.message);
      window.location.href = {
        patient: 'https://carematepatient.vercel.app',
        doctor: 'https://carematedoctor.vercel.app',
        hospital: 'https://carematehospital.vercel.app',
      }[response.data.role];
    }
    
    // Clear fields after submission
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {error && <p className="error">{error}</p>}
          
          <button type="submit">Login</button>
        </form>
        
        <p>Don't have an account?<br /><Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;

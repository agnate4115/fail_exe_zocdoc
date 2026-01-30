import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {service} from "../../service";
import '../../sass/HospitalManagement.scss';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const [error, setError] = useState('');

  const roles = ['patient', 'hospital', 'doctor'];

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!name || !email || !password || !role) {
      setError('Please fill out all fields.');
      return;
    }

    // In a real application, you'd send this data to your backend here
    const data = {
      name,
      email,
      password,
      role,
    };
    console.log(data);

    const response = await service.post('/signup', data);
    console.log(response);
    if (!response.success) {
      setError(response.message);
      return;
    } else {
      alert(response.message);
      window.location.href = '/login';
    }

    // Clear fields after successful submission
    setName('');
    setEmail('');
    setPassword('');
    setRole('patient');
    setError('');
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="role">Role:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            {roles.map((r) => (
              <option key={r} value={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</option>
            ))}
          </select>

          {error && <p className="error">{error}</p>}

          <button type="submit">Sign Up</button>
        </form>

        <p>Already have an account?<br /><Link to="/login">Log In</Link></p>
      </div>
    </div>
  );
}

export default SignUpPage;

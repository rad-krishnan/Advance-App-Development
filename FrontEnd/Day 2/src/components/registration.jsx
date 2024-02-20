// src/registration.js
import React, { useState } from 'react';
import '../assets/css/styles.css';

function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [role, setRole] = useState('USER');
  const [secretKey, setSecretKey] = useState('');
  const [error, setError] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    setError('');
    setShowSuccessMessage(false);
    if (!username || !email || !password || !confirmPassword || !mobileNumber) {
      setError('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    if (role === 'ADMIN' && secretKey !== 'insidejob911') {
      setError('Invalid secret key for admin role');
      return;
    }
    // Simulate registration success (replace with actual logic)
    // Show success message for 3 seconds
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
    // Implement registration logic here
    console.log('Registration submitted:', { username, email, password, mobileNumber, role, secretKey });
  };
 
  return (
    <div className="container">
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="ADMIN">Admin</option>
            <option value="USER">User</option>
 
          </select>
        </div>
        {role === 'ADMIN' && (
          <div>
            <label>Secret Key:</label>
            <input type="password" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} />
          </div>
        )}
        {error && <div className="error">{error}</div>}
        {showSuccessMessage && <div className="flash-message">Registration successful!</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
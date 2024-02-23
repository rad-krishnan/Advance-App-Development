// src/registration.js
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../assets/css/styles.css';
import LogoPlainEnhanced from  '../assets/img/LogoPlainEnhanced.png';

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
  const [passwordVisible, setPasswordVisible] = useState(false);

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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
      <img src= {LogoPlainEnhanced} alt="NRI Aquacruise"/>
      <h2>Welcome to NRI Aquacruise </h2>
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
          <div className="password-input">
            <input
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <VisibilityIcon className="toggle-password" onClick={togglePasswordVisibility} />
          </div>
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
      <p>Already have an Account? <Link to="/">Login</Link></p> 
    </div>
  );
}

export default Registration;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../assets/css/styles.css';
import LogoPlainEnhanced from  '../assets/img/LogoPlainEnhanced.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required');
      return;
    }
    //  login logic  later
    console.log('Login submitted:', { email, password });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
    <img src= {LogoPlainEnhanced} alt="NRI Aquacruise"/>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            <PersonIcon /> Email:
          </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>
            <FingerprintIcon /> Password:
          </label>
          <div className="password-input">
            <input
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <VisibilityIcon className="toggle-password" onClick={togglePasswordVisibility} />
          </div>
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
      <div>

        <p> New User? <Link to="/reg">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;
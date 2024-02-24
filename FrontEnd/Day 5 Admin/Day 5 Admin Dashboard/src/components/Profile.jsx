import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';    
import SaveIcon from '@mui/icons-material/Save';
import { toast, ToastContainer } from 'react-toastify'; // Import toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import '../assets/css/Home.css';

function Profile() {
  const [username, setUsername] = useState('Bruce Wayne');
  const [email, setEmail] = useState('idk_bat@example.com');
  const [password, setPassword] = useState('IM_Batman');
  const [mobileNumber, setMobileNumber] = useState('89895-90900');
  const [role, setRole] = useState('User');
  const [showPassword, setShowPassword] = useState(false);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingMobileNumber, setIsEditingMobileNumber] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameEdit = () => {
    setIsEditingUsername(true);
  };

  const handlePasswordEdit = () => {
    setIsEditingPassword(true);
  };

  const handleMobileNumberEdit = () => {
    setIsEditingMobileNumber(true);
  };

  const handleSaveChanges = () => {
    // Logic to save changes goes here
    setIsEditingUsername(false);
    setIsEditingPassword(false);
    setIsEditingMobileNumber(false);
    toast.success('Changes saved successfully!'); // Show toast message
  };

  return (
    <div className="container-profile">
      <ToastContainer /> {/* Toastify container */}
      <header>
        <h2>Profile</h2>
      </header>
      <div className="profile-details">
        <div>
          <label>Username:</label>
          {isEditingUsername ? (
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          ) : (
            <input type="text" value={username} readOnly />
          )}
          {!isEditingUsername && <EditIcon onClick={handleUsernameEdit} />}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} readOnly />
        </div>
        <div>
          <label>Password:</label>
          {isEditingPassword ? (
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <VisibilityOffIcon className="toggle-password" onClick={togglePasswordVisibility} />
              ) : (
                <VisibilityIcon className="toggle-password" onClick={togglePasswordVisibility} />
              )}
            </div>
          ) : (
            <input type="password" value="IM_Batman" readOnly />
          )}
          {!isEditingPassword && <EditIcon onClick={handlePasswordEdit} />}
        </div>
        <div>
          <label>Mobile Number:</label>
          {isEditingMobileNumber ? (
            <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
          ) : (
            <input type="text" value={mobileNumber} readOnly />
          )}
          {!isEditingMobileNumber && <EditIcon onClick={handleMobileNumberEdit} />}
        </div>
        <div>
          <label>Role:</label>
          <input type="text" value={role} readOnly />
        </div>

        {/* Save Changes button */}
        {(isEditingUsername || isEditingPassword || isEditingMobileNumber) && (
          <button onClick={handleSaveChanges}><SaveIcon /> Save Changes</button>
        )}
      </div>      
    </div>
  );
}

export default Profile;

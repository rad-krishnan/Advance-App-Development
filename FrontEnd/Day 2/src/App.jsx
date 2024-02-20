// src/App.jsx
//import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/registration';
import Login from './components/login';
import './assets/css/styles.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/registration';
import Login from './components/login';
import Home from './components/Home'; 
import Contact from './components/Contact';
import About from './components/About';
import Profile from './components/Profile' ;

//import './assets/css/styles.css';
//import './assets/css/Home.css'; 

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
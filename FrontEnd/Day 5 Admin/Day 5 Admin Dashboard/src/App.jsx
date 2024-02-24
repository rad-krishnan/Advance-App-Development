// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/registration';
import Login from './components/login';
import Home from './components/Home'; 
import Contact from './components/Contact';
import About from './components/About';
import Profile from './components/Profile' ;
import Reservation from './components/Reservation';
import MyBooking from './components/MyBooking';
import Payment from './components/Payment';
import AdminAddBoats from './components/AdminAddBoats';
import ViewPayment from './components/ViewPayment';
import AdminHome from './components/AdminHome';

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
          <Route path="/reserve" element={<Reservation />} /> 
          <Route path="/mybooking" element={<MyBooking />} /> 
          <Route path="/pay" element={<Payment />} /> 
          <Route path="/admin-add" element={<AdminAddBoats />} />
          <Route path="/view-payment" element={<ViewPayment />} />
          <Route path="/admin-home" element={<AdminHome />} />

        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
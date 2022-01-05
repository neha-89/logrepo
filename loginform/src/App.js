import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './components/RegistrationForm';
import Login from './components/Login';
import Home from './components/Home';
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav />
     <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Registration />}/>
        <Route path="/login" element={<Login />}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;

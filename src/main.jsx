import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/Home.jsx';
import './sass/index.css';
import Error from './pages/error/Error.jsx';
import About from './pages/about/About.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Logement from './pages/logement/Logement.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
      <Route path="/logement/:id" element={<Logement />} />      
    </Routes>
    
  </BrowserRouter>,
)

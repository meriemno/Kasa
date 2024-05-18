import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.jsx';
import './sass/index.css';
import Error from './pages/Error.jsx';
import About from './pages/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Logement from './pages/Logement.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
      <Route path="/logement/:id" element={<Logement />}/>
    </Routes>



  </BrowserRouter>,
)

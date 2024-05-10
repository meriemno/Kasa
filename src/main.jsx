import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.jsx';
import './sass/index.css';
import Error from './pages/Error.jsx';
import About from './pages/About.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <Error /> */}
    <About />
  </React.StrictMode>,
)

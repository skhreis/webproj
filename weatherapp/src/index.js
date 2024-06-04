import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/header';
import Home from './components/home';
import Search from './components/data';
import Test from './components/test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<><div><Header /></div><div><Home /></div></>} />    
      <Route path="/search" element={<><Header /><Search /></>} /> 
      <Route path="/test" element={<><Test /></>}  />
      </Routes>
</BrowserRouter>
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="new-meetups" element={<NewMeetup />} />
      <Route path="favorites" element={<Favorites />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

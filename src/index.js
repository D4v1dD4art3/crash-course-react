import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from '../src/components/layout/Layout';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="new-meetups" element={<NewMeetup />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);

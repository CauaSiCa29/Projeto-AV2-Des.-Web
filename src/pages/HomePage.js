// src/pages/HomePage.js
import React from 'react';
import Home from '../components/Home';

const HomePage = ({ pesquisas }) => {
  return (
    <div>
      <Home pesquisas={pesquisas} />
    </div>
  );
};

export default HomePage;

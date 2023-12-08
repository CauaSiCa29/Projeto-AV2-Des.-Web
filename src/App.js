import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Pesquisa from './pages/Pesquisa';
import HomePage from './pages/HomePage';
import ListagemPage from './pages/ListagemPage';

const App = () => {
  
  const [pesquisas, setPesquisas] = useState(() => {
    const localStorageItems = JSON.parse(localStorage.getItem('itens')) || [];
    return localStorageItems;
  });

  useEffect(() => {
    localStorage.setItem('itens', JSON.stringify(pesquisas));
  }, [pesquisas]);

  const handleCadastro = (novaPesquisa) => {
    setPesquisas([...pesquisas, novaPesquisa]);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/pesquisa" element={<Pesquisa onPesquisa={handleCadastro} />} />
          <Route path="/listagem" element={<ListagemPage pesquisas={pesquisas} />} />
          <Route path="/" element={<HomePage pesquisas={pesquisas} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

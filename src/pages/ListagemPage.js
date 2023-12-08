// src/pages/ListagemPage.js
import React from 'react';
import Listagem from '../components/Listagem';

const ListagemPage = ({ pesquisas }) => {
  return (
    <div>
      <Listagem pesquisas={pesquisas} />
    </div>
  );
};

export default ListagemPage;

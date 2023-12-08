import React from 'react';
import PesquisaForm from '../components/PesquisaForm';

const Pesquisa = ({ onPesquisa }) => {
  return (

    <div>
      <section className="intro">
        <h1>Pesquisa Sobre Você!</h1>
        <h2>Me diz aí tuas preferências:</h2>
      </section>

      <section className="pesquisa">
        <PesquisaForm onPesquisa={onPesquisa} />
      </section>
    </div>
  );
};

export default Pesquisa;

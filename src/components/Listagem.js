import React, { useEffect, useState } from 'react';
import './Listagem.css';

const Listagem = () => {
  const [pesquisa, setPesquisa] = useState([]);

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem('itens')) || [];
    setPesquisa(localStorageItems);
  }, []);

  return (
    <section className="intro">
      <h1>Obrigado por responder a pesquisa!</h1>
      <h2>Aqui estão os seus dados e dos outros participantes:</h2>

      <div className="container">
        <ul>
          {pesquisa.map((pesquisa, index) => (
            <li className='lista' key={index}>
              {pesquisa.nome} - {pesquisa.ling} - {pesquisa.poke}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Listagem;


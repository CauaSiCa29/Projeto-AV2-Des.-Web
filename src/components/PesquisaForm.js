import React, { useState, useEffect } from 'react';
import './PesquisaForm.css';

const PesquisaForm = ({ onPesquisa }) => {
  const [nome, setNome] = useState('');
  const [ling, setLing] = useState('');
  const [poke, setPoke] = useState('');

  useEffect(() => {
    console.log('Componente PesquisaForm foi montado!'); }, []);

  const handleCadastro = () => {
    if (nome && ling && poke) {
      onPesquisa({ nome, ling, poke });

      const novoItem = { nome, ling, poke };
      const localStorageItems = JSON.parse(localStorage.getItem('itens')) || [];
      localStorageItems.push(novoItem);
      localStorage.setItem('itens', JSON.stringify(localStorageItems));

      setNome('');
      setLing('');
      setPoke('');

      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Preencha todos os campos obrigatórios.');
    }
  };

  return (
    <div className='centered-form'>
      <div className='form'>
        <h2>Cadastro</h2>
  
        <div className="grid-container">
          <div className="grid-item">
            <label htmlFor="nome">Nome:</label>
            <input id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>
  
          <div className="grid-item">
            <label htmlFor="ling">Linguagem preferida:</label>
            <input id="ling" type="text" value={ling} onChange={(e) => setLing(e.target.value)} />
          </div>
          
          <div className="grid-item">
            <label htmlFor="poke">Pokemon Preferido:</label>
            <input id="poke" type="text" value={poke} onChange={(e) => setPoke(e.target.value)} />
          </div>
  
          <div className="grid-item button-container">
            <button onClick={handleCadastro}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
  };  

export default PesquisaForm;

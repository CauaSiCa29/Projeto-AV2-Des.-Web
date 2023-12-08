import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <section className="intro">
        <h1>Quero saber de Você também!</h1>
        <p>Pesquisas já feitas:</p>
      </section>

      <section className="Pesquisas">
        <article className="Pesquisa">
          <h3>Cauã Siqueira</h3>
          <p>Cauã - JavaScript - Squirtle</p>
        </article>

        <article className="Pesquisa">
          <h3>Jonathas Sport</h3>
          <p>Jonathas - C++ - Greninja</p>
        </article>

        <article className="Pesquisa">
          <h3>Lucas Skatista</h3>
          <p>Lucas - Phyton - Zorua</p>
        </article>

        <article className="Pesquisa">
          <h3>Arnaldinhuu Vaqueiro</h3>
          <p>Arnaldo - Java - Tauros</p>
        </article>
        
        <article className="Pesquisa">
          <h3>Ice Berg</h3>
          <p>Berg - C# - Seel</p>
        </article>
        
        <article className="Pesquisa">
          <h3>Passsarela</h3>
          <p>Marcus - Cobol - Machoke</p> 
        </article>
      </section>
    </div>
  );
};

export default Home;

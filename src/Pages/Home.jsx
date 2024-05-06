import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import characters from '../Components/characters';
import Card from '../Components/Card';
import './Home.css';

const Home = () => {
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);

  const seleccionarPersonaje = (personaje) => {
    setPersonajeSeleccionado(personaje);
  };

  return (
    <>
      <div className="titulo">
        <h2>Entes</h2>
      </div>
      <div className="personajes">
        {characters.map((character, index) => (
          <Link to={`/personaje/${index}`} key={index}>
            <Card className='card' character={character} seleccionarPersonaje={seleccionarPersonaje} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;

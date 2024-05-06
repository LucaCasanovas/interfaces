import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import characters from './characters';
import './Personajes.css'

const Personajes = () => {
  const { id } = useParams();
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);

  useEffect(() => {
    // Buscar el personaje seleccionado por su índice en el array de personajes
    const index = parseInt(id);
    if (!isNaN(index) && index >= 0 && index < characters.length) {
      setPersonajeSeleccionado(characters[index]);
    }
  }, [id]);

  const [puntosRestantes, setPuntosRestantes] = useState(10);
  const [salud, setSalud] = useState(0);
  const [fuerza, setFuerza] = useState(0);
  const [destreza, setDestreza] = useState(0);
  const [nivel, setNivel] = useState(1);
  const [experiencia, setExperiencia] = useState(0);

  const asignarPuntos = (atributo, valor) => {
    if (puntosRestantes >= valor) {
      switch (atributo) {
        case 'salud':
          setSalud(salud + valor);
          break;
        case 'fuerza':
          setFuerza(fuerza + valor);
          break;
        case 'destreza':
          setDestreza(destreza + valor);
          break;
        default:
          break;
      }
      setPuntosRestantes(puntosRestantes - valor);
    } else {
      alert('No tienes suficientes puntos disponibles para asignar.');
    }
  };

  const quitarPuntos = (atributo, valor) => {
    switch (atributo) {
      case 'salud':
        setSalud(Math.max(0, salud - valor));
        break;
      case 'fuerza':
        setFuerza(Math.max(0, fuerza - valor));
        break;
      case 'destreza':
        setDestreza(Math.max(0, destreza - valor));
        break;
      default:
        break;
    }
    setPuntosRestantes(puntosRestantes + valor);
  };

  const aumentarNivel = () => {
    if (experiencia >= 10) {
      setNivel(nivel + 1);
      setExperiencia(0);
      setPuntosRestantes(puntosRestantes + 3);
      // Aplicar bonificación de 3 puntos a distribuir manualmente
    }
  };

  const aumentarExperiencia = () => {
    setExperiencia(experiencia + 1);
    if (experiencia + 1 >= 10) {
      aumentarNivel();
    }
  };

  const disminuirExperiencia = () => {
    setExperiencia(Math.max(0, experiencia - 1));
  };

  return (
    <div className="card">
      <div className='perfil'>
      {personajeSeleccionado && ( // Asegurándonos de que haya un personaje seleccionado antes de intentar mostrar sus datos
        <>
          <img src={personajeSeleccionado.imagen} alt={personajeSeleccionado.nombre} />
        </>
      )}
      </div>
      <div className='estadisticas'>
      {personajeSeleccionado && ( // Asegurándonos de que haya un personaje seleccionado antes de intentar mostrar sus datos
        <>
          <h2>{personajeSeleccionado.nombre}</h2>
        </>
      )}
      <p>Puntos restantes: {puntosRestantes}</p>
      <div className="atributos">
        <div className="atributo">
          <h3>Salud</h3>
          <p>{salud}</p>
          <div>
            <button onClick={() => asignarPuntos('salud', 1)}>+</button>
            <button onClick={() => quitarPuntos('salud', 1)}>-</button>
          </div>
        </div>

        <div className="atributo">
          <h3>Fuerza</h3>
          <p>{fuerza}</p>
          <div>
            <button onClick={() => asignarPuntos('fuerza', 1)}>+</button>
            <button onClick={() => quitarPuntos('fuerza', 1)}>-</button>
          </div>
        </div>

        <div className="atributo">
          <h3>Destreza</h3>
          <p>{destreza}</p>
          <div>
            <button onClick={() => asignarPuntos('destreza', 1)}>+</button>
            <button onClick={() => quitarPuntos('destreza', 1)}>-</button>
          </div>
        </div>
      </div>

      <div className="nivel-exp">
        <p>Nivel: {nivel}</p>
        <p>Experiencia: {experiencia}</p>
        <div>
        <button onClick={disminuirExperiencia}>-</button>
        <button onClick={aumentarExperiencia}>+</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Personajes;


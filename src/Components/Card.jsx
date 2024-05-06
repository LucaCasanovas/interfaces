import React from 'react';

const Card = ({ character, seleccionarPersonaje }) => {
  return (
    <div onClick={() => seleccionarPersonaje(character)}>
      <img src={character.imagen} alt={character.nombre} />
      <h2>{character.nombre}</h2>
    </div>
  );
};

export default Card;

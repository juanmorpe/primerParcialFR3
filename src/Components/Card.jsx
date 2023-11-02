import React from 'react';

function Card(   { nombre, colorFavorito,materiaFavorita }) {
  return (
    <div className="card">
      <h3>Valores desde el formulario:</h3>
      <p>MateriaFavorita:{materiaFavorita}</p>
      <p>Nombre: {nombre}</p>
      <p>Color Favorito: {colorFavorito}</p>
    </div>
  );
}

export default Card;
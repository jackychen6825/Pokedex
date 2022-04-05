import React from 'react';
import './pokemon.css';

export default function PokemonCard({ name, image }) {

  const naming = name.split('').map((char, idx) => {
    if (idx === 0) return char.toUpperCase();
    return char;
  }).join("");

  return (
    <div className='pokemon-card-container'>
      <div className='pokemon-name-container'>{`${naming}`}</div>
      <img className='pokemon-image' src={image} alt="" />
    </div>
  )
}

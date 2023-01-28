
import './ZodiacCard.css';
import '../../data.js';
import React from 'react';


export default function ZodiacCard({ name, dates, symbol }) {
  return (
    <div className="zodiac-card">
      <img alt={name} src={`${process.env.PUBLIC_URL}/Images/${name}.png`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
      <span>{symbol}</span>
    </div>
  );
}



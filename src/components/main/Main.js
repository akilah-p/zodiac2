
import React from 'react';

import zodiac from '../../data.js';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';
import backgroundImg from '../../background.png';
import './main.css';

export default function Main() {
  return (
    <main
      style={{
        backgroundImage: `url(${backgroundImg})`
      }}>
      {zodiac.map((item) => (
        <ZodiacCard key={item.name} {...item} />
      ))}
    </main>
  );
}

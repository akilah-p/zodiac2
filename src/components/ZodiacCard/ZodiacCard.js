
import './ZodiacCard.css';
import '../../data.js';
import zodiacImg from '../Images';


export default function ZodiacCard({ name, dates, symbol }) {
  return (
    <div className="zodiac-card">
      <img alt={name} src={`${zodiacImg.name}.png`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
      <span>{symbol}</span>
    </div>
  );
}




import './ZodiacCard.css';
import '../../data.js';

export default function ZodiacCard({ name, dates, symbol }) {
  return (
    <div className="zodiac-card">
      <img alt={name} src={`./public/${name}.png`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
      <span>{symbol}</span>
    </div>
  );
}



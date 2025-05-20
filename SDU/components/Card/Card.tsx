import "./Card.scss";

export interface Card {
  title: string;
  link: string;
  score?: number;
  description?: string;
}

export const Card = ({ card }: { card: Card }) => {
  return (
    <div className="card">
      <h3 className="card_title">{card.title}</h3>
      {card.description && (
        <p className="card_description">{card.description}</p>
      )}
      {card.score && (
        <div className="card_score">
          Релевантность: {(card.score * 100).toFixed(0)}%
        </div>
      )}
      <a
        className="card_link"
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Cмотреть
      </a>
    </div>
  );
};
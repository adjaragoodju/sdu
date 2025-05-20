import "./Card.scss";
export interface Card {
  title: string;
  link: string;
}

export const Card = ({ card }: { card: Card }) => {
  return (
    <div className="card">
      <h3 className="card_title">{card.title}</h3>
      <a
        className="card_link"
        href={card.link}
        target="_blank"
      >
        Cмотреть
      </a>
    </div>
  );
};

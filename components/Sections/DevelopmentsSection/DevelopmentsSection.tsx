"use client";
import { Search } from "@/components/Search/Search";
import "./DevelopmentsSection.scss";
import { useState } from "react";
import { Card } from "@/components/Card/Card";

export const DevelopmentsSection = () => {
  const [cards, setCards] = useState([
    {
      title: "Цифровая карта семьи",
      link: "https://example.com",
    },
    {
      title: "Мониториг статусов заявок на оказание государственных услуг",
      link: "https://example.com",
    },
    {
      title: "E-обращения",
      link: "https://example.com",
    },
  ]);
  return (
    <section
      className="developments"
      id="developments"
    >
      <h2 className="developments_title">Наши разработки</h2>
      <p className="developments_description">
        Наши флагманские продукты используемые высшими государственными органами
        на ежедневной основе
      </p>
      <Search />
      <div className="developments_cards">
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
          />
        ))}
      </div>
    </section>
  );
};

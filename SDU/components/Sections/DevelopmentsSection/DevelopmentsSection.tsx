"use client";
import { Search } from "@/SDU/components/Search/Search";
import "./DevelopmentsSection.scss";
import { useState } from "react";
import { Card } from "@/SDU/components/Card/Card";
import { Container } from "@/SDU/components/Container/Container";
import { useTranslation } from "@/hooks/useTranslation";

export const DevelopmentsSection = () => {
  const { t } = useTranslation();
  const [cards, setCards] = useState([
    {
      title: "Цифровая карта семьи",
      link: "https://sdu.data.gov.kz/superset/dashboard/67",
    },
    {
      title: "Мониторинг статусов заявок",
      link: "https://sdu.data.gov.kz/superset/dashboard/70/",
    },
    {
      title: "E-обращения",
      link: "https://sdu.data.gov.kz/superset/dashboard/369/",
    },
  ]);

  return (
    <section className="developments" id="developments">
      <Container>
        <div className="developments_content">
          <h2 className="developments_title">
            {t("developments.title")}
          </h2>
          <p className="developments_description">
            {t("developments.description")}
          </p>
          <Search onSearch={setCards} />
          <div className="developments_cards">
            {cards.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

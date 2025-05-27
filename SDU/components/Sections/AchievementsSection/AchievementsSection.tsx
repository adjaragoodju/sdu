"use client";

import Image from "next/image";
import { Container } from "@/SDU/components/Container/Container";
import "./AchievementsSection.scss";
import { useTranslation } from "@/hooks/useTranslation";

export const AchievementsSection = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      img: "/images/achievements/db.svg",
      titleKey: "achievements.items.db.title",
      descriptionKey: "achievements.items.db.description",
    },
    {
      img: "/images/achievements/glasses.svg",
      titleKey: "achievements.items.anonymous_data.title",
      descriptionKey: "achievements.items.anonymous_data.description",
    },
    {
      img: "/images/achievements/govtech.svg",
      titleKey: "achievements.items.govtech.title",
      descriptionKey: "achievements.items.govtech.description",
    },
    {
      img: "/images/achievements/undp.svg",
      titleKey: "achievements.items.undp.title",
      descriptionKey: "achievements.items.undp.description",
    },
    {
      img: "/images/achievements/global_cio.svg",
      titleKey: "achievements.items.global_cio.title",
      descriptionKey: "achievements.items.global_cio.description",
    },
    {
      img: "/images/achievements/data_award.svg",
      titleKey: "achievements.items.data_award.title",
      descriptionKey: "achievements.items.data_award.description",
    },
  ];

  return (
    <section id="achievements" className="achievements">
      <Container>
        <div className="achievements_content">
          <h2 className="achievements_title">{t("achievements.title")}</h2>
          <div className="achievements_list">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievements_item">
                <Image 
                  src={achievement.img} 
                  alt="Achievement"
                  width={84}
                  height={84}
                />
                <h3 className="achievements_item_title">{t(achievement.titleKey)}</h3>
                <p className="achievements_item_description">
                  {t(achievement.descriptionKey).split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < t(achievement.descriptionKey).split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
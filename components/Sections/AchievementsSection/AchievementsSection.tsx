"use client";

import { Container } from "@/components/Container/Container";
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
  ];

  return (
    <section id="achievements" className="achievements">
      <Container>
        <div className="achievements_content">
          <h2 className="achievements_title">{t("achievements.title")}</h2>
          <div className="achievements_list">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievements_item">
                <img src={achievement.img} alt="Achievement" />
                <h3 className="achievements_item_title">{t(achievement.titleKey)}</h3>
                <p className="achievements_item_description">{t(achievement.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

'use client';

import { useTranslationDFC } from "@/hooks/useTranslationDFC"; 
import { Container } from "@/SDU/components/Container/Container"; 
import "./ToolsSection.scss";

export const ToolsSection = () => {
  const { t } = useTranslationDFC(); // Get the translation function

  return (
    <section className="tools">
      <Container>
        <div className="stats_section">
          <div className="stats_grid">
            <div className="stat_block">
              <img src="/images_dfc/corruption.png" alt="" />
              <h2 className="stat_number">{t("tools.stats.proactive")}</h2>
              <p className="stat_text">{t("tools.stats.proactiveText")}</p>
            </div>
            <div className="stat_block">
              <h2 className="stat_number">{t("tools.stats.services")}</h2>
              <p className="stat_text">{t("tools.stats.servicesText")}</p>
            </div>
            <div className="stat_block">
              <h2 className="stat_number">{t("tools.stats.pushNotifications")}</h2>
              <p className="stat_text">{t("tools.stats.pushNotificationsText")}</p>
            </div>
          </div>

          <p className="tools_description">
            {t("tools.description")}
          </p>

          <div className="tools_grid">
            <div className="tools_card">
              <img src="/images_dfc/image6.png" alt="" />
              <p>{t("tools.cards.tool1")}</p>
            </div>
            <div className="tools_card">
              <img src="/images_dfc/image7.png" alt="" />
              <p>{t("tools.cards.tool2")}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

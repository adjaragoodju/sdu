"use client";
import { Container } from "@/SDU/components/Container/Container";
import "./SduSection.scss";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export const SduSection = () => {
  const { theme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <section
      id="sdu"
      className="sdu"
    >
      <Container>
        <div className="sdu_content">
          <div className="sdu_logo">
            {hasMounted && (
              <img
                src={`/images/sdu_logo_${theme}.svg`}
                alt="sdu_logo"
              />)}

          </div>
          <div className="sdu_features">
            <div className="sdu_features_1">
              <img
                src="/images/sdu/speed_icon.svg"
                alt="Speed Icon"
              />
              <p>
                {t("sdu.features_1")}
              </p>
            </div>
            <div className="sdu_features_2">
              <img
                src="/images/sdu/grid_icon.svg"
                alt="Grid Icon"
              />
              <p>{t("sdu.features_2")}</p>
            </div>
            <div className="sdu_features_3">
              <img
                src="/images/sdu/plot_icon.svg"
                alt="Plot Icon"
              />
              <p>{t("sdu.features_3")}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

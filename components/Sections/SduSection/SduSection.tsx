"use client";
import { Container } from "@/components/Container/Container";
import "./SduSection.scss";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

export const SduSection = () => {
  const { theme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

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
              <p>Быстрое создание аналитических решений</p>
            </div>
            <div className="sdu_features_2">
              <img
                src="/images/sdu/grid_icon.svg"
                alt="Grid Icon"
              />
              <p>Возможность подать запрос на создание новых решений</p>
            </div>
            <div className="sdu_features_3">
              <img
                src="/images/sdu/plot_icon.svg"
                alt="Plot Icon"
              />
              <p>Набор готовой аналитики для бизнеса</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

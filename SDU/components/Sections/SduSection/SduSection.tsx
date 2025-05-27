"use client";
import Image from "next/image";
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
      <div className="sdu_content">
        <div className="sdu_logo">
          {hasMounted && (
            <Image
              src={`/images/sdu_logo_${theme}.svg`}
              alt="SDU Logo"
              width={320}
              height={100}
              priority
            />
          )}
        </div>
        <div className="sdu_features">
          <div className="sdu_features_1">
            <Image
              src="/images/sdu/speed_icon.svg"
              alt="Speed Icon"
              width={100}
              height={100}
            />
            <p>
              {t("sdu.features_1").split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < t("sdu.features_1").split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
          <div className="sdu_features_2">
            <Image
              src="/images/sdu/grid_icon.svg"
              alt="Grid Icon"
              width={100}
              height={100}
            />
            <p>
              {t("sdu.features_2").split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < t("sdu.features_2").split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
          <div className="sdu_features_3">
            <Image
              src="/images/sdu/plot_icon.svg"
              alt="Plot Icon"
              width={100}
              height={100}
            />
            <p>
              {t("sdu.features_3").split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < t("sdu.features_3").split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
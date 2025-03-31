"use client";
import Image from "next/image";
import "./IntroSection.scss";
import { Container } from "@/SDU/components/Container/Container";
import { useTranslation } from "@/hooks/useTranslation";

export const IntroSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="intro"
      className="intro"
    >
      <Container>

        <div className="intro_content">
          <div className="intro_info">

            <h1 className="intro_title">Smart Data Ukimet</h1>
            <p className="intro_description">
              {t("intro.description_1")}
              <br />
              <br />
              {t("intro.description_2")}
            </p>
            <div className="intro_button">
              <button>
                {t("intro.button")}
              </button>
              <p>
                {t("intro.developed_by")}
              </p>
            </div>
          </div>
          <div className="intro_image">
            <Image
              src="/images/intro.png"
              alt="SDU GOV"
              width={460}
              height={370}
            />
          </div>
        </div>

      </Container>

    </section>
  );
};

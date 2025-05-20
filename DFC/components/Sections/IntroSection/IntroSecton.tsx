'use client';

import { useTranslationDFC } from "@/hooks/useTranslationDFC";
import { Container } from "@/SDU/components/Container/Container";
import "./IntroSection.scss";

export const IntroSection = () => {
    const { t, locale } = useTranslationDFC();  // Using locale to force re-render on language change
    return (
        <section className="intro">
            <Container>
                <div className="intro_content">
                    <h1 className="intro_title">
                        {t("intro.title")}
                    </h1>
                    <p className="intro_description">
                        {t("intro.description")}
                    </p>
                    <button className="intro_button">{t("intro.button")}</button>
                </div>
            </Container>
        </section>
    );
};

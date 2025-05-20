'use client';

import { useTranslationDFC } from "@/hooks/useTranslationDFC";
import { Container } from "@/SDU/components/Container/Container";
import "./NitecSection.scss";

export const NitecSection = () => {
    const { t, locale } = useTranslationDFC();  // Using locale here as well
    return (
        <section className="nitec">
            <Container>
                <div className="nitec_content">
                    <div className="nitec_left">
                        <h1 className="nitec_title">
                            {t("nitec.title")}
                        </h1>
                        <p className="nitec_description">
                            {t("nitec.description")}
                        </p>
                    </div>
                    <div className="picture">
                        <img src="images_dfc/akimat.png" alt="" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

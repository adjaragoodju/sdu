'use client';

import { useTranslationDFC } from "@/hooks/useTranslationDFC";
import { Container } from "../Container/Container";
import "./Footer.scss";

export const Footer = () => {
    const { t } = useTranslationDFC(); // Use DFC translations here
    return (
        <footer className="footer">
            <Container>
                <div className="footer_content">
                    <div className="logo">
                        <img src="/images_dfc/logoNitecFullWhitePng.png" alt="" />
                    </div>
                    <p>{t("footer.text")}</p> {/* This should now output the translated text from the dfc.json file */}
                </div>
            </Container>
        </footer>
    );
};

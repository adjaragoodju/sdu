'use client';

import { useTranslationDFC } from "@/hooks/useTranslationDFC";  // Ensure the custom hook is correctly imported
import { Container } from "@/SDU/components/Container/Container"; 
import "./GovServicesSection.scss";

export const GovServicesSection = () => {
    const { t } = useTranslationDFC();  // Get the translation function

    // Get items individually by using t() on each key
    const item1 = t("gov_services.items.1");
    const item2 = t("gov_services.items.2");
    const item3 = t("gov_services.items.3");
    const item4 = t("gov_services.items.4");

    return (
        <section className="gov-services">
            <Container>
                <div className="gov-services_content">
                    <h2 className="gov-services_title">
                        {t("gov_services.title")}
                    </h2>
                    <p className="gov-services_description">
                        {t("gov_services.description")}
                    </p>
                    <div className="gov-services_list">
                        <div className="gov-services_item">
                            <span>{item1}</span>
                        </div>
                        <div className="gov-services_item">
                            <span>{item2}</span>
                        </div>
                        <div className="gov-services_item">
                            <span>{item3}</span>
                        </div>
                        <div className="gov-services_item">
                            <span>{item4}</span>
                        </div>
                    </div>
                    <button className="gov-services_button">{t("gov_services.button")}</button>
                </div>
            </Container>
        </section>
    );
};

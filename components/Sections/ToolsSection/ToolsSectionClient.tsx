// ToolsSectionClient.tsx
"use client";
import { Carousel } from "@/components/Carousel/Carousel";
import { Container } from "@/components/Container/Container";
import { useTranslation } from "@/hooks/useTranslation";
import "./ToolsSection.scss";

export const ToolsSectionClient = ({ logos }: { logos: { src: string; alt: string }[] }) => {
    const { t } = useTranslation();
    return (
        <section id="tools" className="tools">
            <Container>
                <h2 className="tools_title">{t("tools.title")}</h2>
            </Container>
            <Carousel logos={logos} />
        </section>
    );
};

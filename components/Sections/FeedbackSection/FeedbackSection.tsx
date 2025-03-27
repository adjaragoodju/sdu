"use client";
import { Feedback } from "@/components/Feedback/Feedback";
import "./FeedbackSection.scss";
import { Container } from "@/components/Container/Container";
import { useTranslation } from "@/hooks/useTranslation";

export const FeedbackSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="feedback"
      className="feedback"
    >
      <Container>
        <div className="feedback_content">
          <h2 className="feedback_title">
            {t("feedback.title")}
          </h2>
          <Feedback />
        </div>
      </Container>

    </section>
  );
};

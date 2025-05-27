"use client";
import { Feedback } from "@/SDU/components/Feedback/Feedback";
import "./FeedbackSection.scss";
import { Container } from "@/SDU/components/Container/Container";
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
            {t("feedback.request_title")}
          </h2>
          <Feedback />
        </div>
      </Container>
    </section>
  );
};
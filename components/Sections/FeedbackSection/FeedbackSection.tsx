import { Feedback } from "@/components/Feedback/Feedback";
import "./FeedbackSection.scss";
import { Container } from "@/components/Container/Container";

export const FeedbackSection = () => {
  return (
    <section
      id="feedback"
      className="feedback"
    >
      <Container>
        <div className="feedback_content">
          <h2 className="feedback_title">Форма обратной связи</h2>
          <Feedback />
        </div>
      </Container>

    </section>
  );
};

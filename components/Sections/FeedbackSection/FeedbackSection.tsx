import { Feedback } from "@/components/Feedback/Feedback";
import "./FeedbackSection.scss";

export const FeedbackSection = () => {
  return (
    <section
      id="feedback"
      className="feedback"
    >
      <div className="feedback_content">
        <h2 className="feedback_title">Форма обратной связи</h2>
        <Feedback />
      </div>
    </section>
  );
};

"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import "./Feedback.scss";
import { useTranslation } from "@/hooks/useTranslation";

export const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim() || !email.trim() || !feedback.trim()) {
      toast.error("Пожалуйста, заполните все поля.");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Неверный формат почты.");
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setFeedback("");
  };

  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, feedback }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Ошибка при отправке");

      toast.success("Форма успешно отправлена!");
      resetForm();
    } catch (err: any) {
      toast.error(err.message || "Ошибка отправки формы.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="feedback_form" onSubmit={sendData}>
      <div className="feedback_form_inputs">
        <div className="feedback_form_left">
          <div className="feedback_form_item">
            <label htmlFor="email">
              {t("feedback.email")}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("feedback.email_placeholder")}
            />
          </div>
          <div className="feedback_form_item">
            <label htmlFor="name">
              {t("feedback.name")}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("feedback.name_placeholder")}
            />
          </div>
        </div>
        <div className="feedback_form_item">
          <label htmlFor="message">
            {t("feedback.message")}
          </label>
          <textarea
            id="message"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder={t("feedback.message_placeholder")}
          />
        </div>
      </div>

      <div className="feedback_form_buttons">
        <button type="submit" className="feedback_form_submit" disabled={loading}>
          {loading ? t("feedback.sending") : t("feedback.send")}
        </button>
        <button type="button" onClick={resetForm} className="feedback_form_reset">
          {t("feedback.reset")}
        </button>
      </div>

    </form>
  );
};

"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import "./Feedback.scss";
import { useTranslation } from "@/hooks/useTranslation";

interface ErrorResponse {
  message?: string;
  error?: string;
  details?: string;
}

export const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const validate = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim() || !email.trim() || !feedback.trim()) {
      toast.error(t("feedback.validation.all_fields"));
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error(t("feedback.validation.invalid_email"));
      return false;
    }
    return true;
  };

  const resetForm = (): void => {
    setName("");
    setEmail("");
    setFeedback("");
  };

  const sendData = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const response = await axios.post('/api/feedback', {
        name: name.trim(),
        email: email.trim(),
        feedback: feedback.trim(),
      }, {
        timeout: 10000, // 10 seconds timeout
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log("Данные успешно отправлены:", response.data);
      toast.success(t("feedback.messages.success"));
      resetForm();
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        
        if (axiosError.code === 'ECONNABORTED') {
          toast.error(t("feedback.messages.timeout"));
        } else if (axiosError.response?.status === 400) {
          toast.error(t("feedback.messages.validation_error"));
        } else if (axiosError.response?.status === 500) {
          toast.error(t("feedback.messages.server_error"));
        } else {
          const errorMessage = axiosError.response?.data?.message 
            || axiosError.response?.data?.error 
            || t("feedback.messages.network_error");
          toast.error(errorMessage);
        }
      } else if (error instanceof Error) {
        console.error("Общая ошибка:", error.message);
        toast.error(`${t("feedback.messages.error")}: ${error.message}`);
      } else {
        console.error("Неизвестная ошибка:", error);
        toast.error(t("feedback.messages.unknown_error"));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="feedback_form" onSubmit={sendData}>
      <div className="feedback_form_inputs">
        <div className="feedback_form_left">
          <div className="feedback_form_item">
            <label htmlFor="email">{t("feedback.email")}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("feedback.email_placeholder")}
              disabled={loading}
              required
            />
          </div>
          <div className="feedback_form_item">
            <label htmlFor="name">{t("feedback.name")}</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("feedback.name_placeholder")}
              disabled={loading}
              required
            />
          </div>
        </div>
        <div className="feedback_form_item">
          <label htmlFor="message">{t("feedback.message")}</label>
          <textarea
            id="message"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder={t("feedback.message_placeholder")}
            disabled={loading}
            required
            rows={8}
          />
        </div>
      </div>

      <div className="feedback_form_buttons">
        <button 
          type="submit" 
          className="feedback_form_submit" 
          disabled={loading || !name.trim() || !email.trim() || !feedback.trim()}
        >
          {loading ? t("feedback.sending") : t("feedback.send")}
        </button>
        <button 
          type="button" 
          onClick={resetForm} 
          className="feedback_form_reset"
          disabled={loading}
        >
          {t("feedback.reset")}
        </button>
      </div>
    </form>
  );
};
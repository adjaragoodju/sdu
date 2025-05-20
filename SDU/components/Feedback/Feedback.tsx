"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import "./Feedback.scss";
import { useTranslation } from "@/hooks/useTranslation";

interface FeedbackResponse {
  id?: string;
  Name: string;
  Email: string;
  Description: string;
}

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
      toast.error("Пожалуйста, заполните все поля.");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Неверный формат почты.");
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

    const API_TOKEN = "suApp8HsRjNwOLWwdAq_Ko7csMY8gvuev6FcLsz9";
    const BASE_URL = "https://nocodb-web.sdu.gov.kz/api/v2";
    const TABLE_ID = "mww0a0qxp9yo6pl";

    const options = {
      method: "POST" as const,
      url: `${BASE_URL}/tables/${TABLE_ID}/records`,
      headers: {
        "xc-token": API_TOKEN,
        "Content-Type": "application/json",
      },
      data: {
        Name: name,
        Email: email,
        Description: feedback,
      },
    };

    try {
      const response = await axios.request<FeedbackResponse>(options);
      console.log("Данные успешно отправлены:", response.data);
      toast.success("Форма успешно отправлена!");
      resetForm();
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ErrorResponse>;
        const errorMessage = axiosError.response?.data?.message 
          || axiosError.response?.data?.error 
          || axiosError.message 
          || "Неизвестная ошибка";
        
        console.error("Детали ошибки:", axiosError.response?.data || axiosError.message);
        toast.error(`Ошибка при отправке формы: ${errorMessage}`);
      } else if (error instanceof Error) {
        console.error("Общая ошибка:", error.message);
        toast.error(`Ошибка: ${error.message}`);
      } else {
        console.error("Неизвестная ошибка:", error);
        toast.error("Произошла неизвестная ошибка при отправке формы.");
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
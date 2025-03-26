import "./Feedback.scss";

export const Feedback = () => {
  return (
    <form className="feedback_form">
      <div className="feedback_form_inputs">
        <div className="feedback_form_left">
          <div className="feedback_form_item">
            <label htmlFor="email">Почта</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Введите вашу почту"
            />
          </div>
          <div className="feedback_form_item">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Введите ваше имя"
            />
          </div>
        </div>
        <div className="feedback_form_item">
          <label htmlFor="message">Текст сообщения</label>
          <textarea
            id="message"
            name="message"
          ></textarea>
        </div>
      </div>
      <div className="feedback_form_buttons">
        <button
          type="submit"
          className="feedback_form_submit"
        >
          Отправить
        </button>
        <button
          type="reset"
          className="feedback_form_reset"
        >
          Очистить
        </button>
      </div>
    </form>
  );
};

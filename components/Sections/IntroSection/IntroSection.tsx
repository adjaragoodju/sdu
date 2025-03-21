import Image from "next/image";
import "./IntroSection.scss";

export const IntroSection = () => {
  return (
    <section
      id="intro"
      className="intro"
    >
      <div className="intro_content">
        <h1 className="intro_title">Smart Data Ukimet</h1>
        <p className="intro_description">
          Мы помогаем правительству Республики Казахстан собирать, хранить и
          анализировать данные из государственных систем в деперсонализированном
          виде.
          <br />
          <br />
          Создаем продукты для принятия эффективных решений на основе данных.
        </p>
        <div className="intro_button">
          <button>Оставить заявку</button>
          <p>Разработано АО "НИТ"</p>
        </div>
      </div>
      <div className="intro_image">
        <Image
          src="/images/intro.png"
          alt="SDU GOV"
          width={460}
          height={370}
        />
      </div>
    </section>
  );
};

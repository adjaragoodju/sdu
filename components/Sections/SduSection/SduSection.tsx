import "./SduSection.scss";

export const SduSection = () => {
  return (
    <section
      id="sdu"
      className="sdu"
    >
      <div className="sdu_content">
        <div className="sdu_logo">
          <img
            src="/images/sdu_logo_dark.svg"
            alt="sdu_logo"
          />
        </div>
        <div className="sdu_features">
          <div className="sdu_features_1">
            <img
              src="/images/sdu/speed_icon.svg"
              alt="Speed Icon"
            />
            <p>Быстрое создание аналитических решений</p>
          </div>
          <div className="sdu_features_2">
            <img
              src="/images/sdu/grid_icon.svg"
              alt="Grid Icon"
            />
            <p>Возможность подать запрос на создание новых решений</p>
          </div>
          <div className="sdu_features_3">
            <img
              src="/images/sdu/plot_icon.svg"
              alt="Plot Icon"
            />
            <p>Набор готовой аналитики для бизнеса</p>
          </div>
        </div>
      </div>
    </section>
  );
};

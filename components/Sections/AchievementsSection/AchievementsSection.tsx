import { Container } from "@/components/Container/Container";
import "./AchievementsSection.scss";
export const AchievementsSection = () => {
  const achievements = [
    {
      img: "/images/achievements/db.svg",
      title: "Подключенок Smart Data Ukimet100+ БД и ИС ГО",
      description:
        "К нам подключены более 100 Баз данных и Единых систем электронного документооборота. ",
    },
    {
      img: "/images/achievements/glasses.svg",
      title: "Данные представлены в обезличенном вид",
      description:
        "Мы представили данные в обезличенном виде, обеспечив их безопасность и конфиденциальность.",
    },
    {
      img: "/images/achievements/govtech.svg",
      title: "Международное признание GovTech Prize",
      description:
        'Категория “Инклюзивная цифровая трансформация" 1 из 1300 проектов в мире.',
    },
    {
      img: "/images/achievements/undp.svg",
      title: "Международное признание от UNDP",
      description: "Мы вошли в Top-3 в UNDP Open Source Adaptation",
    },
    {
      img: "/images/achievements/global_cio.svg",
      title: "Winner of the project of the year 2024 contest",
      description: "Best Project in Analytics and BigData",
    },
  ];
  return (
    <section
      id="achievements"
      className="achievements"
    >
      <Container>
        <div className="achievements_content">
          <h2 className="achievements_title">Наши достижения</h2>
          <div className="achievements_list">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="achievements_item"
              >
                <img
                  src={achievement.img}
                  alt="Achievement"
                />
                <h3 className="achievements_item_title">{achievement.title}</h3>
                <p className="achievements_item_description">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

    </section>
  );
};

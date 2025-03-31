import { Container } from "@/SDU/components/Container/Container";
import "./IntroSection.scss";
export const IntroSection = () => {
    return (
        <section className="intro">
            <Container>
                <div className="intro_content">
                    <h1 className="intro_title">Цифровая Карта Семьи</h1>
                    <p className="intro_description">
                        уникальная модель, которая классифицирует семьи по пяти категориям благополучия (от A до E) на основе 100 социально-экономических критериев. Разработанная совместно с ПРООН,
                        ЦКС использует международную методологию Алкира-Фостера для измерения многомерной бедности.
                    </p>
                    <button className="intro_button">Learn More</button>

                </div>
            </Container>
        </section>
    );
}
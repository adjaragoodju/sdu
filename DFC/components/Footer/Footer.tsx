import { Container } from "../Container/Container";
import "./Footer.scss";
export const Footer = () => {
    return <footer className="footer">
        <Container>
            <div className="footer_content">
                <img src="" alt="Logo" />
                <p>АО "Национальные информационные технологии" © 2024 Все права защищены</p>
                <div className="locales">
                    <span className="locale">Рус</span>
                    <span className="locale">Каз</span>
                    <span className="locale">Eng</span>
                </div>
            </div>
        </Container>
    </footer>;
}
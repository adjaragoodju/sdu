import { Container } from "../Container/Container";
import "./Header.scss";
export const Header = () => {
    return <header className="header">
        <Container>
            <div className="header_content">
                <div className="header_logo">Logo</div>
                <nav className="header_nav">
                    <ul className="header_nav_list">
                        <li className="header_nav_item">
                            <a>
                                Smart Data Ukimet
                            </a>
                        </li>
                        <li className="header_nav_item">
                            <a>
                                ИИ
                            </a>
                        </li>
                        <li className="header_nav_item">
                            <a>
                                FAQs
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Container>
    </header>;
}
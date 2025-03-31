import { Container } from "@/SDU/components/Container/Container";
import "./GovServicesSection.scss";

export const GovServicesSection = () => {
    return (
        <section className="gov-services">
            <Container>
                <div className="gov-services_content">
                    <h2 className="gov-services_title">Проактивные услуги</h2>
                    <p className="gov-services_description">
                        Граждане получают СМС-уведомления с информацией о доступных услугах, их статусе и дальнейших действиях (при необходимости).
                    </p>
                    <div className="gov-services_list">
                        <div className="gov-services_item">
                            <img src="" alt="Service" />
                            <span>Пособие многодетной семьи</span>
                        </div>
                        <div className="gov-services_item">
                            <img src="" alt="Service" />
                            <span>Пособие многодетной семьи</span>
                        </div>
                        <div className="gov-services_item">
                            <img src="" alt="Service" />
                            <span>Пособие многодетной семьи</span>
                        </div>
                        <div className="gov-services_item">
                            <img src="" alt="Service" />
                            <span>Пособие многодетной семьи</span>
                        </div>
                    </div>
                    <button className="gov-services_button">Просмотреть все проактивные услуги</button>

                </div>
            </Container>
        </section>
    );
}
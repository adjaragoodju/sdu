"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Container } from "../Container/Container";
import "./Footer.scss";

export const Footer = () => {
  const { theme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <footer className="footer">
      <Container>
        <div className="footer_content">
          <div className="footer_left">
            <div className="company_info">
              <div className="nitec_info">
                {hasMounted && (
                  <img
                    src={`/images/nitec_logo_${theme}.svg`}
                    alt="Nitec Logo"
                  />
                )}
                <p>
                  Акционерное общество <br /> «Национальные информационные технологии»
                </p>
                <p>© 2024 г. Все права защищены</p>
              </div>
              <div className="vertical_line"></div>
              <div className="sdu_info">
                {hasMounted && (
                  <img
                    src={`/images/sdu_logo_${theme}.svg`}
                    alt="SDU Logo"
                  />
                )}
                <p>
                  Акционерное общество <br /> «Национальные информационные технологии»
                </p>
                <p>© 2024 г. Все права защищены</p>
              </div>
            </div>

            <div className="contact_info">
              <div className="contact_address">
                <div className="contact_location">
                  <img src="/images/contacts/map_icon.svg" alt="Map Icon" />
                  <span>
                    Республика Казахстан, 010000,
                    г. Астана район Есиль, проспект Мангилик Ел, здание 55/15
                  </span>
                </div>
                <a href="/terms" className="contact_terms">
                  Пользовательское соглашение
                </a>
              </div>

              <div className="contact_call_center">
                <p>Контактный центр</p>
                <a href="tel:+77172272727" className="contact_phone">
                  <img src="/images/contacts/phone_icon.svg" alt="Phone" />
                  <span>+7 (7172) 27-27-27</span>
                </a>
                <a href="mailto:sdu@nitec.kz" className="contact_mail">
                  <img src="/images/contacts/mail_icon.svg" alt="Mail" />
                  <span>sdu@nitec.kz</span>
                </a>
              </div>
            </div>

          </div>

          <div className="social_links">
            <h4>Мы в социальных сетях</h4>
            <div className="social_links_icons">
              <a href="#"><img src="/images/social_links/youtube_icon.svg" alt="Youtube" /></a>
              <a href="#"><img src="/images/social_links/facebook_icon.svg" alt="Facebook" /></a>
              <a href="#"><img src="/images/social_links/instagram_icon.svg" alt="Instagram" /></a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

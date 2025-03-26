import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_left">
          <div className="company_info">
            <div className="nitec_info">
              <img
                src="/images/nitec_logo_dark.svg"
                alt="Nitec Logo"
              />
              <p>
                Акционерное общество <br /> «Национальные информационные
                технологии»
              </p>
              <p>© 2024 г. Все права защищены</p>
            </div>
            <div className="vertical_line"></div>
            <div className="sdu_info">
              <img
                src="/images/sdu_logo_dark.svg"
                alt="SDU Logo"
              />
              <p>
                Акционерное общество <br /> «Национальные информационные
                технологии»
              </p>
              <p>© 2024 г. Все права защищены</p>
            </div>
          </div>
        </div>

        <div className="social_links">
          <h4>Мы в социальных сетях</h4>
          <div className="social_links_icons">
            <a href="#">
              <img
                src="/images/social_links/youtube_icon.svg"
                alt="Youtube"
              />
            </a>
            <a href="#">
              <img
                src="/images/social_links/facebook_icon.svg"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                src="/images/social_links/instagram_icon.svg"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

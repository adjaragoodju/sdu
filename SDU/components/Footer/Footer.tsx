"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";
import { Container } from "../Container/Container";
import "./Footer.scss";
import { useTranslation } from "@/hooks/useTranslation";

export const Footer = () => {
  const { t } = useTranslation();
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
                  <Image
                    src={`/images/nitec_logo_${theme}.svg`}
                    alt="Nitec Logo"
                    width={120}
                    height={40}
                  />
                )}
                <p>
                  {t("footer.company_1_1")} <br /> {t("footer.company_1_2")}
                </p>
                <p>
                  {t("footer.company_2")}
                </p>
              </div>
              <div className="vertical_line"></div>
              <div className="sdu_info">
                {hasMounted && (
                  <Image
                    src={`/images/sdu_logo_${theme}.svg`}
                    alt="SDU Logo"
                    width={120}
                    height={40}
                  />
                )}
                <p>
                  {t("footer.company_1_1")} <br /> {t("footer.company_1_2")}
                </p>
                <p>
                  {t("footer.company_2")}
                </p>
              </div>
            </div>

            <div className="contact_info">
              <div className="contact_address">
                <div className="contact_location">
                  <Image 
                    src="/images/contacts/map_icon.svg" 
                    alt="Map Icon"
                    width={20}
                    height={20}
                  />
                  <span>
                    {t("footer.address")}
                  </span>
                </div>
                <Link href="/terms" className="contact_terms">
                  {t("footer.terms")}
                </Link>
              </div>

              <div className="contact_call_center">
                <p> {t("footer.contact_center")} </p>
                <a href="tel:+77172272727" className="contact_phone">
                  <Image 
                    src="/images/contacts/phone_icon.svg" 
                    alt="Phone"
                    width={20}
                    height={20}
                  />
                  <span>+7 (7172) 27-27-27</span>
                </a>
                <a href="mailto:sdu@nitec.kz" className="contact_mail">
                  <Image 
                    src="/images/contacts/mail_icon.svg" 
                    alt="Mail"
                    width={20}
                    height={20}
                  />
                  <span>sdu@nitec.kz</span>
                </a>
              </div>
            </div>

          </div>

          <div className="social_links">
            <h4>{t("footer.social_title")}</h4>
            <div className="social_links_icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/images/social_links/youtube_icon.svg" 
                  alt="Youtube"
                  width={32}
                  height={32}
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/images/social_links/facebook_icon.svg" 
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/images/social_links/instagram_icon.svg" 
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
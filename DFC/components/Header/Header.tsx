'use client';

import { useTranslationDFC } from "@/hooks/useTranslationDFC";
import { Container } from "@/SDU/components/Container/Container";
import "./Header.scss";

export const Header = () => {
  const { t, setLocale, locale } = useTranslationDFC(); // ✅ Add locale here

  return (
    <header className="header">
      <Container>
        <div className="header_content">
          <div className="header_logo">
            <a>
              <img src="/images_dfc/logoNitecFullWhitePng.png" alt="" />
            </a>
          </div>
          <nav className="header_nav">
            <ul className="header_nav_list">
              <li className="header_nav_item">
                <a href="/">{t("header.home")}</a> {/* ✅ this now reacts to locale */}
              </li>
            </ul>
          </nav>
          <div className="language-toggle">
            <button onClick={() => setLocale("ru")} disabled={locale === "ru"}>
              RU
            </button>
            <button onClick={() => setLocale("en")} disabled={locale === "en"}>
              EN
            </button>
            <button onClick={() => setLocale("kk")} disabled={locale === "kk"}>
              KZ
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

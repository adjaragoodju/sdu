"use client";

import { useState, useEffect } from "react";
import "./Header.scss";
import { Container } from "../Container/Container";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "@/hooks/useTranslation";

export function Header() {
  const { t, locale, setLocale } = useTranslation();
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { threshold: 0.5 });

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);


  return (
    <header className="header">
      <Container>

        <div className="header_content">
          <nav className="header_content_left">
            <div className="logo">
              <a href="/">
                {hasMounted ? (
                  <img
                    src={theme === "light" ? "/images/logo_light.svg" : "/images/logo_dark.svg"}
                    alt="SDU GOV"
                  />
                ) : (
                  <img
                    src="/images/logo_dark.svg"
                    alt="SDU GOV"
                  />
                )}
              </a>
            </div>
            <ul className="header_links">
              <li>
                <a
                  href="#"
                  className={activeSection === "" ? "active" : ""}
                >
                  {t("header.home")}
                </a>
              </li>
              <li>
                <a
                  href="#access"
                  className={activeSection === "access" ? "active" : ""}
                >
                  {t("header.access")}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeSection === "projects" ? "active" : ""}
                >
                  {t("header.projects")}
                </a>
              </li>
              <li>
                <a
                  href="/DFC"
                  className={activeSection === "DFC" ? "active" : ""}
                >
                  {t("header.DFC")}
                </a>
              </li>
            </ul>
          </nav>
          <div className="header_content_right">
            {/* <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                {hasMounted ? (
                  theme === "light" ? <SunIcon /> : <MoonIcon />
                ) : (
                  <SunIcon />
                )}
              </button> */}

            <div className="language-toggle">
              <button
                onClick={() => setLocale("ru")}
                className={locale === "ru" ? "active" : ""}
              >
                RU
              </button>
              <button
                onClick={() => setLocale("en")}
                className={locale === "en" ? "active" : ""}
              >
                EN
              </button>
              <button
                onClick={() => setLocale("kk")}
                className={locale === "kk" ? "active" : ""}
              >
                KZ
              </button>
            </div>


            <a className="registration_button" href="/register">
              {t("header.register")}
            </a>
          </div>

        </div>
      </Container>

    </header>
  );
}

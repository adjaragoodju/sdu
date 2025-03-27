"use client";

import { useState, useEffect } from "react";
import "./Header.scss";
import { Container } from "../Container/Container";
import { useTheme } from "@/hooks/useTheme";
import { SunIcon } from "@/icons/SunIcon";
import { MoonIcon } from "@/icons/MoonIcon";

export function Header() {
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
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#access"
                  className={activeSection === "access" ? "active" : ""}
                >
                  Получить доступ
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeSection === "projects" ? "active" : ""}
                >
                  Текущие проекты
                </a>
              </li>
              <li>
                <a
                  href="#cks"
                  className={activeSection === "cks" ? "active" : ""}
                >
                  ЦКС
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

            <a className="registration_button" href="/register">Регистрация</a>
          </div>

        </div>
      </Container>

    </header>
  );
}

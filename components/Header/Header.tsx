"use client";
import { useState, useEffect } from "react";
import "./Header.scss";

export function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="header">
      <div className="header_content">
        <div className="header_content_left">
          <div className="header_logo">
            <a href="/">
              <img
                src="/images/logo.svg"
                alt="SDU GOV"
              />
            </a>
          </div>
          <nav className="header_nav">
            <ul>
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
        </div>
        <div className="header_content_right">
          <div className="header_content_right_registration">
            <a href="/register">Регистрация</a>
          </div>
        </div>
      </div>
    </header>
  );
}

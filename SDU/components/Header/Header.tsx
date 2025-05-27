"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Header.scss";
import { Container } from "../Container/Container";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "@/hooks/useTranslation";
import { SunIcon } from "@/icons/SunIcon";
import { MoonIcon } from "@/icons/MoonIcon";

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <Container>
        <div className="header_content">
          <nav className="header_content_left">
            <div className="logo">
              <Link href="/">
                {hasMounted ? (
                  <Image
                    src={theme === "light" ? "/images/logo_light.svg" : "/images/logo_dark.svg"}
                    alt="SDU GOV"
                    width={180}
                    height={60}
                    priority
                  />
                ) : (
                  <Image
                    src="/images/logo_dark.svg"
                    alt="SDU GOV"
                    width={180}
                    height={60}
                    priority
                  />
                )}
              </Link>
            </div>
            <ul className="header_links">
              <li>
                <Link
                  href="/"
                  className={activeSection === "" ? "active" : ""}
                >
                  {t("header.home")}
                </Link>
              </li>
              <li>
                <a
                  href="#achievements"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('achievements');
                  }}
                  className={activeSection === "achievements" ? "active" : ""}
                >
                  {t("header.achievements")}
                </a>
              </li>
              <li>
                <a
                  href="#feedback"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('feedback');
                  }}
                  className={activeSection === "feedback" ? "active" : ""}
                >
                  {t("header.request")}
                </a>
              </li>
              <li>
                <Link
                  href="/DFC"
                  className={activeSection === "DFC" ? "active" : ""}
                >
                  {t("header.DFC")}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header_content_right">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle" 
              aria-label="Toggle theme"
            >
              {hasMounted ? (
                theme === "light" ? (
                  <SunIcon className="theme-icon" />
                ) : (
                  <MoonIcon className="theme-icon" />
                )
              ) : (
                <SunIcon className="theme-icon" />
              )}
            </button>

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

            <Link className="registration_button" href="/register">
              {t("header.register")}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
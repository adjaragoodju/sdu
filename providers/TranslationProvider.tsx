'use client';

import { defaultLocale, Locale } from '@/locales/i18n';
import { createContext, ReactNode, useState, useEffect } from 'react';

import ru from "@/locales/ru.json";
import en from "@/locales/en.json";
import kk from "@/locales/kk.json";

const messagesByLocale: Record<Locale, Record<string, any>> = {
    ru,
    en,
    kk,
};


type TranslationContextType = {
    t: (key: string) => string;
    locale: Locale;
    setLocale: (locale: Locale) => void;
};

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>(() => {
        if (typeof window === "undefined") return defaultLocale;
        return (localStorage.getItem("locale") as Locale) || defaultLocale;
    });

    useEffect(() => {
        localStorage.setItem("locale", locale);
    }, [locale]);

    function getNestedValue(obj: any, path: string): string | undefined {
        return path.split('.').reduce((acc, key) => acc?.[key], obj);
    }

    const messages = messagesByLocale[locale];

    const t = (key: string) => getNestedValue(messages, key) || key;

    return (
        <TranslationContext.Provider value={{ t, locale, setLocale }}>
            {children}
        </TranslationContext.Provider>
    );
}

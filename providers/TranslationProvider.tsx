'use client';

import { defaultLocale, Locale } from '@/locales/i18n';
import { createContext, ReactNode, useState, useEffect } from 'react';

type TranslationContextType = {
    t: (key: string) => string;
    locale: Locale;
    setLocale: (locale: Locale) => void;
};

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children, messages }: { children: ReactNode, messages: Record<string, string> }) {
    const [locale, setLocale] = useState<Locale>(() => {
        if (typeof window === "undefined") return defaultLocale;
        return (localStorage.getItem("locale") as Locale) || defaultLocale;
    });

    useEffect(() => {
        localStorage.setItem("locale", locale);
    }, [locale]);

    const t = (key: string) => messages[key] || key;

    return (
        <TranslationContext.Provider value={{ t, locale, setLocale }}>
            {children}
        </TranslationContext.Provider>
    );
}

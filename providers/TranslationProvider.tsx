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
    // Start with defaultLocale for both server and client
    const [locale, setLocale] = useState<Locale>(defaultLocale);
    const [isClient, setIsClient] = useState(false);

    // Use useEffect to update locale from localStorage after first render
    useEffect(() => {
        setIsClient(true);
        const savedLocale = localStorage.getItem("locale") as Locale;
        if (savedLocale && Object.keys(messagesByLocale).includes(savedLocale)) {
            setLocale(savedLocale);
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem("locale", locale);
        }
    }, [locale, isClient]);

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
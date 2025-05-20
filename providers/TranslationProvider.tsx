'use client';

import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { defaultLocale, Locale } from '@/locales/i18n';

import sduRu from '@/locales/ru.json';
import sduEn from '@/locales/en.json';
import sduKk from '@/locales/kk.json';

const messages = {
  ru: sduRu,
  en: sduEn,
  kk: sduKk,
};

type TranslationContextType = {
  t: (key: string) => string;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export const TranslationContext = createContext<TranslationContextType>({
  t: (key) => key,
  locale: defaultLocale,
  setLocale: () => {},
});

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && ['ru', 'en', 'kk'].includes(saved)) {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  const dictionary = useMemo(() => messages[locale] || {}, [locale]);

  const t = (key: string): string => {
    const parts = key.split('.');
    let result: any = dictionary;

    for (const part of parts) {
      result = result?.[part];
      if (!result) break;
    }

    return typeof result === 'string' ? result : key;
  };

  return (
    <TranslationContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}

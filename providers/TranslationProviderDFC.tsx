'use client';

import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { Locale } from '@/locales/i18n';

import dfcRu from '@/locales/dfc.ru.json';
import dfcEn from '@/locales/dfc.en.json';
import dfcKk from '@/locales/dfc.kk.json';

const messages = {
  ru: dfcRu,
  en: dfcEn,
  kk: dfcKk,
};

type TranslationContextType = {
  t: (key: string) => string;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export const TranslationContextDFC = createContext<TranslationContextType>({
  t: (key) => key,
  locale: "ru",
  setLocale: () => {},
});

export function TranslationProviderDFC({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");

  useEffect(() => {
    const saved = localStorage.getItem('locale_dfc') as Locale | null;
    if (saved && ['ru', 'en', 'kk'].includes(saved)) {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('locale_dfc', locale);
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
    <TranslationContextDFC.Provider value={{ t, locale, setLocale }}>
      {children}
    </TranslationContextDFC.Provider>
  );
}

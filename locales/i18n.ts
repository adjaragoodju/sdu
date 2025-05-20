export const locales = ['en', 'kk', 'ru'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'ru';

import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import messages_en from '@/locales/en.json';
import messages_kk from '@/locales/kk.json';
import messages_ru from '@/locales/ru.json';
import { locales } from '@/locales/i18n';
import { TranslationProvider } from '@/providers/TranslationProvider';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const messagesMap = {
    en: messages_en,
    kk: messages_kk,
    ru: messages_ru,
};

export default function LocaleLayout({
    children,
    params: { locale },
}: {
    children: ReactNode;
    params: { locale: string };
}) {
    if (!locales.includes(locale as any)) notFound();

    const messages = messagesMap[locale as keyof typeof messagesMap] || messages_ru;

    return (
        <html lang={locale}>
            <body className="antialiased light">
                <TranslationProvider messages={messages}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                    <ToastContainer position="top-right" autoClose={3000} />
                </TranslationProvider>
            </body>
        </html>
    );
}

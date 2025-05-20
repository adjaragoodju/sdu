import { Metadata } from "next";
import "@/DFC/styles/DFC.scss";
import { Header } from "@/DFC/components/Header/Header";
import { Footer } from "@/DFC/components/Footer/Footer";
import { TranslationProviderDFC } from "@/providers/TranslationProviderDFC";
export const metadata: Metadata = {
    title: "ЦКС - Smart Data Ukimet",
    description: "Центральная Карта Семьи",
};


export default function DFCLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <><TranslationProviderDFC>
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer />
            </TranslationProviderDFC>
        </>
    );
}
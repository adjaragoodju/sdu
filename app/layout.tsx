import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { TranslationProvider } from "@/providers/TranslationProvider";
import "@/styles/global.scss";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "SDU GOV",
  description: "Smart Data Ukimet Government Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html>
        <body className="antialiased light">
          <TranslationProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} />
          </TranslationProvider>
        </body>
      </html>
    </>
  );
}

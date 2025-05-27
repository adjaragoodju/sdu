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
    <html suppressHydrationWarning>
      <body className="antialiased">
        <TranslationProvider>
          {children}
          <ToastContainer position="top-right" autoClose={3000} />
        </TranslationProvider>
      </body>
    </html>
  );
}
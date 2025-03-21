import "@/styles/global.scss";
import { Metadata } from "next";
import { Container } from "@/components/Container/Container";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

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
    <html lang="en">
      <body className="antialiased">
        <Container>
          <Header />
          <main>{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}

import "@/styles/global.scss";
import { Metadata } from "next";

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
      {children}
    </>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/utils/fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Sandro Luz | Tattoo Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts}>
      <body className="flex flex-col min-h-screen w-full ">
        <Header />
        <main className="flex flex-col flex-grow max-w-screen-2xl mx-auto pt-8 px-12 lg:px-24 lg:pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Gi5lund IT | Personlig IT-rådgivning",
  description: "Professionelle IT-løsninger med ro og overblik.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className="scroll-smooth">
      <body className="bg-[#f8fafc] text-[#2c3e50] antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
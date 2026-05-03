import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Gi5lund IT | Personlig IT-rådgivning",
  description: "Professionelle IT-løsninger med ro og overblik.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" >
      <body className="text-[#2c3e50] antialiased">
        <Navbar />
        <main className="fixed top-16 w-full bg-linear-to-b from-blue-300 via-cyan-200 to-teal-50 ">{children}</main>
      </body>
    </html>
  );
}
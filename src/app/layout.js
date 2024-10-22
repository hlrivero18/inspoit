import {  Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
const lato = Open_Sans({ subsets: ["latin"], weight: ["400"] })

export const metadata = {
  title: "InspoIT",
  description: "Conectando el crecimiento",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

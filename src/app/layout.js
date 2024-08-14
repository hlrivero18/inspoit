import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav/Nav";

const lato = Lato({subsets: ["latin"], weight: ["400"]})

export const metadata = {
  title: "InspoIT",
  description: "Conectando el crecimiento",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}

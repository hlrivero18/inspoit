import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "InspoIT",
  description: "Conectando el crecimiento",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {" "}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

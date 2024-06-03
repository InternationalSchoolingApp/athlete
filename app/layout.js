import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "component/Navbar";
import Footer from "component/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Athlete- International Schooling",
  description: "Athlete- International Schooling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

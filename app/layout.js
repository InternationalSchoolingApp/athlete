import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "component/Navbar";
import Footer from "component/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "School for Student Athletes - NCAA Approved Online School",
  description:
    "NCAA approved online school offering flexible education to help student athletes succeed academically and athletically. Start your journey today!",
  robots: "index,follow",
  referrer: "no-referrer-when-downgrade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

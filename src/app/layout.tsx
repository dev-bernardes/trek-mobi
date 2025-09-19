import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["500","700"],
  display: "swap",
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "Trek Mobi",
  description: "Connecting the World Through Content and Technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mont.className}>
      <body className="bg-black text-white antialiased font-[500]">
        {children}
      </body>
    </html>
  );
}

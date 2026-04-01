import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CloudForge | API & Cloud Implementation Solutions",
  description: "Enterprise-grade API services, scalable backend solutions with Node.js, Express.js, PostgreSQL, and robust Cloud implementations on AWS & Alibaba Cloud.",
  keywords: ["API Service", "Cloud Implementation", "Express.js", "Node.js", "PostgreSQL", "AWS", "Alibaba Cloud", "Company Profile"],
  openGraph: {
    title: "CloudForge | API & Cloud Solutions",
    description: "Enterprise-grade API services and Cloud implementation.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

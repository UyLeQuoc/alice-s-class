import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tư vấn chiến lược miễn phí - Alice’s Class",
  description: "Tư vấn chiến lược miễn phí - Alice’s Class",
  keywords: "IELTS, tư vấn chiến lược, miễn phí, Alice’s Class, học IELTS, luyện thi IELTS",
  openGraph: {
    title: "Tư vấn chiến lược miễn phí - Alice’s Class",
    description: "Nhận tư vấn chiến lược miễn phí từ Alice’s Class để đạt điểm IELTS cao nhất!",
    url: "https://www.alicesclass.com",
    type: "website",
    images: [
      {
        url: "https://www.alicesclass.com/assets/laptop.png",
        width: 1200,
        height: 630,
        alt: "Alice’s Class - Tư vấn chiến lược miễn phí",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@alicesclass",
    title: "Tư vấn chiến lược miễn phí - Alice’s Class",
    description: "Nhận tư vấn chiến lược miễn phí từ Alice’s Class để đạt điểm IELTS cao nhất!",
    images: ["https://www.alicesclass.com/assets/laptop.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tư vấn chiến lược miễn phí - Alice’s Class" />
        <meta property="og:description" content="Nhận tư vấn chiến lược miễn phí từ Alice’s Class để đạt điểm IELTS cao nhất!" />
        <meta property="og:image" content="https://www.alicesclass.com/assets/og-image.jpg" />
        <meta property="og:url" content="https://www.alicesclass.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tư vấn chiến lược miễn phí - Alice’s Class" />
        <meta name="twitter:description" content="Nhận tư vấn chiến lược miễn phí từ Alice’s Class để đạt điểm IELTS cao nhất!" />
        <meta name="twitter:image" content="https://www.alicesclass.com/assets/og-image.jpg" />
      </Head>
      <body className={`${interFont.className} antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-0XM01YFQ85" />
    </html>
  );
}

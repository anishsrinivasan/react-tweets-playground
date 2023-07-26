import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Tweets Playground",
  description:
    "Just to demonstrate the use-cases of this amazing library - react-tweet.",
  openGraph: {
    title: "React Tweets Playground",
    siteName: "React Tweets Playground",
    description:
      "Just to demonstrate the use-cases of this amazing library - react-tweet.",
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-RZBEPKS403" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-RZBEPKS40');
        `}
      </Script>
    </html>
  );
}

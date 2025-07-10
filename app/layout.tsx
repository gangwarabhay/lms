// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/header/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leadership Growth | Professional & Spiritual Development",
  description:
    "Helping leaders achieve profound professional and spiritual growth",
  keywords: [
    "leadership",
    "professional growth",
    "spiritual growth",
    "personal development",
  ],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Leadership Growth | Professional & Spiritual Development",
    description:
      "Helping leaders achieve profound professional and spiritual growth",
    url: "https://yourwebsite.com",
    siteName: "Leadership Growth",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"  // ✅ correct spelling!
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <Header />
            {children}
            {/* <footer className='bg-blue-400 h-21 text-3xl justify-center items-center'> this is footer</footer> */}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}


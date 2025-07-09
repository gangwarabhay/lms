// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Lora } from 'next/font/google';
import Header from "@/components/header/page";
import Footer from "@/components/header/Footer/page";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'], // choose weights you need
  display: 'swap',
  variable: '--font-lora', // optional, for Tailwind
});

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
    
    <html lang="en" className="scroll-smooth {lora.variable}">
      <body>
        {/* Main layout structure */}
        <div className="min-h-screen flex flex-col">
          {/* Header/Navigation would go here */}
          {/* <Header /> */}

          {/* Main content */}
          <main className="flex-grow">
            <Header />
            {children}
            {/* <footer className='bg-blue-400 h-21 text-3xl justify-center items-center'> this is footer</footer> */}
            <Footer />
          </main>

          {/* Footer would go here */}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}

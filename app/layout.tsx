// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from "@/components/header/page"



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Leadership Growth | Professional & Spiritual Development',
  description: 'Helping leaders achieve profound professional and spiritual growth',
  keywords: ['leadership', 'professional growth', 'spiritual growth', 'personal development'],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Leadership Growth | Professional & Spiritual Development',
    description: 'Helping leaders achieve profound professional and spiritual growth',
    url: 'https://yourwebsite.com',
    siteName: 'Leadership Growth',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
        <body>
        {/* Main layout structure */}
        <div className="min-h-screen flex flex-col">
          {/* Header/Navigation would go here */}
          {/* <Header /> */}
          
          {/* Main content */}
          <main className="flex-grow">
             <Header/>
            {children}
            <footer className='bg-blue-400 h-21 text-3xl justify-center items-center'> this is footer</footer>

          </main>
          
          {/* Footer would go here */}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
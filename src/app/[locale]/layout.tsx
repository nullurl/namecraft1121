import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Chinese, English, and Japanese Name Generator – NameCraft AI Free Tool',
  description: 'Generate perfect names in English, Japanese, and Chinese with our AI-powered name generator. Create unique, culturally appropriate names with handwriting and pronunciation features.',
  keywords: 'name generator, Japanese names, Chinese names, English names, AI name generator, character names, handwriting names, name pronunciation, multilingual names',
  authors: [{ name: 'NameCraft AI' }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Chinese, English, and Japanese Name Generator – NameCraft AI Free Tool',
    description: 'Generate perfect names in English, Japanese, and Chinese with our AI-powered name generator.',
    url: 'https://www.namecraft.site',
    siteName: 'NameCraft AI',
    images: [
      {
        url: 'https://www.namecraft.site/social-preview.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chinese, English, and Japanese Name Generator – NameCraft AI Free Tool',
    description: 'Generate perfect names in English, Japanese, and Chinese with our AI-powered name generator.',
    images: ['https://www.namecraft.site/social-preview.png'],
  },
  alternates: {
    canonical: 'https://www.namecraft.site',
  },
  verification: {
    google: 'G-P5FKQ72ZDF',
  },
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
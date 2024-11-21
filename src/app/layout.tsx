import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.namecraft.site'),
  title: 'Chinese, English, and Japanese Name Generator – NameCraft AI Free Tool',
  description: 'Generate perfect names in English, Japanese, and Chinese with our AI-powered name generator. Create unique, culturally appropriate names with handwriting and pronunciation features.',
  keywords: 'name generator, Japanese names, Chinese names, English names, AI name generator, character names, handwriting names, name pronunciation, multilingual names, free name generator, online name generator',
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
        alt: 'NameCraft AI - Free Name Generator',
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
    creator: '@namecraftai',
    site: '@namecraftai',
  },
  alternates: {
    canonical: 'https://www.namecraft.site',
    languages: {
      'en': 'https://www.namecraft.site/en',
      'zh': 'https://www.namecraft.site/zh',
      'ja': 'https://www.namecraft.site/ja',
    },
  },
  verification: {
    google: 'G-P5FKQ72ZDF',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-Robots-Tag" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Noto+Serif+JP&family=Ma+Yen+Xing&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P5FKQ72ZDF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P5FKQ72ZDF');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
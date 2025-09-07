import { Geist, Geist_Mono } from 'next/font/google';
import { LogoProvider } from '@/contexts/LogoContext';
import FaviconUpdater from './components/faviconUpdater';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Zafari CC Design LLC',
  description: 'Custom carpentry and interior design with craftsmanship and creativity.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LogoProvider>
          <FaviconUpdater />
          {children}
        </LogoProvider>
      </body>
    </html>
  );
}

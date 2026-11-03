import type { Metadata, Viewport } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';
import TopNavBar from './components/layout/TopNavBar';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Mana - Digitalized Embroidery Art',
  description: 'todo',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='Space Mono'>🧵</text></svg>"
        />
      </head>
      <body className={`${spaceMono.variable} bg-background text-on-background font-body-md min-h-screen antialiased`}>
        <TopNavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

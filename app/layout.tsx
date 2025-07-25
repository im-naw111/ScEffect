import Script from 'next/script';
import type { Metadata } from 'next';
import './globals.css';
import { Layout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Nawawow Site',
  description: 'www.nawawow.site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script
          src="//tympanus.net/codrops/adpacks/analytics.js"
          strategy="beforeInteractive"
        />  
      </head>
      <body className="text-white">
        <Layout />
        {children}
        
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { NeueMontreal } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Valley.co | Settings',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={NeueMontreal.variable}>
      <body className={NeueMontreal.className}>{children}</body>
    </html>
  );
}

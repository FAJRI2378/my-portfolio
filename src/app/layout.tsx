import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Portofolio Arman Fajri',
  description: 'Dibuat dengan Next.js dan Tailwind',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

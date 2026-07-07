import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Expert Dental - Midtown | Manhattan Dentist',
  description:
    'Contact Expert Dental - Midtown at 110 E 40th St #104 in Manhattan. Call (212) 763-3383 or visit the practice website.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

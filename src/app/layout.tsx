import { ReactNode } from 'react';
import './global.css';
import { Metadata } from 'next';

type Props = {
  children: ReactNode;
};

 
export const metadata: Metadata = {
  title: 'Omotosho Ayomikun',
  description: 'Omotosho Ayomikun Resume',
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
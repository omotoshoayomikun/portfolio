'use client';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
    attribute="class" 
    // enableColorScheme={false}
    defaultTheme='dark'
    enableSystem
    disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

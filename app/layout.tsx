import './globals.css';
import type { Metadata } from 'next';
import { spaceGrotesk } from '@/lib/fonts';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Neubrutalism Store',
  description: 'A modern store with neubrutalism design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
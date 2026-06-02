import '@/styles/tokens.css';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

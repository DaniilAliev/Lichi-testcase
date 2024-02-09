import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Roboto } from 'next/font/google';

const inter = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

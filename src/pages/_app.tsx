import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Roboto } from 'next/font/google';
import { Provider } from 'react-redux';
import store from '@/slices/store';

const inter = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

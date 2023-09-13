import { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/redux/store';

import '@/styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

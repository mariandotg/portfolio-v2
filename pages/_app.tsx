import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { wrapper } from '@/store';

import '@/styles/globals.css';

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;

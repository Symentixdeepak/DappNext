// pages/_app.tsx

import { AppProps } from 'next/app';
import "src/style/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  // You can add layouts or global providers here
  return <Component {...pageProps} />;
}

export default MyApp;

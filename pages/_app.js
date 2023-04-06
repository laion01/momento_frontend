import { Provider } from 'react-redux';
import { store } from '/store/store';
import Layout from 'components/layout/Layout';
import '../styles/globals.css';
import { ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <ThirdwebProvider activeChain="binance-testnet">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThirdwebProvider>
    </Provider>
  )
}

export default MyApp

import { Provider } from 'react-redux';
import { store } from '/store/store';
import Layout from 'components/layout/Layout';
import '../styles/globals.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
    </Provider>
  )
}

export default MyApp

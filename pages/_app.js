import { Provider } from 'react-redux';
import { store } from '/store/store';
import Layout from 'components/layout/Layout';
import '../styles/globals.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider store={store}>
        <div>
            
        </div>
        <Layout>
          {router.isFallback ? 
            <div className='fixed w-[100vw] h-[100vh] top-0 left-0 flex justify-center items-center'>
              <Image width={64} height={64} src="/images/loading.svg" alt="" />
            </div>: 
            <Component {...pageProps} />
          }
        </Layout>
        <ToastContainer />
    </Provider>
  )
}

export default MyApp

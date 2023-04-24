import OrderTable from 'components/OrderTable';
import StoreList from 'components/StoreList';
import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css'

export default function Home() {
  useEffect(() => {

    
  }, []);
  return (
        <div className={styles.container}>
      <Head>
        <title>Momento - Locket</title>
        <meta name="description" content="Momento" />
        <link rel="icon" href="/momento.png" />
      </Head>

      <main >
        <StoreList />
      </main>
      <footer></footer>
    </div>
  );
}
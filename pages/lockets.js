import AboutUs from 'components/AboutUs';
import Locket from 'components/Locket';
import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {

    
  }, []);
  return (
        <div className={styles.container}>
      <Head>
        <title>Momento - Locket</title>
        <meta name="description" content="Casino" />
        <link rel="icon" href="/momento.png" />
      </Head>

      <main >
        <Locket />
      </main>
      <footer></footer>
    </div>
  );
}
import AboutUs from 'components/AboutUs';
import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {

    
  }, []);
  return (
        <div className={styles.container}>
      <Head>
        <title>Momento Gaming Studio</title>
        <meta name="description" content="Casino" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main >
        <AboutUs />
      </main>
      <footer></footer>
    </div>
  );
}
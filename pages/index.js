import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import HeroSection from "components/LandingPage/HeroSection";
import VideoSection from "components/LandingPage/VideoSection";
import AlbumSection from "components/LandingPage/AlbumSection";
import MemoriesSection from "components/LandingPage/MemoriesSection";
import HowSection from "components/LandingPage/HowSection";
import LocketsSection from "components/LandingPage/LocketsSection";
import NewsSection from "components/LandingPage/NewsSection";
import ReviewSection from "components/LandingPage/ReviewSection";
import FAQSection from "components/LandingPage/FAQSection";

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.live.net/v7.2/OneDrive.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Momento Lockets</title>
        <meta name="description" content="Momento" />
        <link rel="icon" href="/momento.png" />
      </Head>

      <main>
        <HeroSection />
        <VideoSection />
        <AlbumSection />
        <MemoriesSection />
        <HowSection />
        <LocketsSection />
        <NewsSection />
        <ReviewSection />
        <FAQSection />
      </main>
      <footer></footer>
    </div>
  );
}
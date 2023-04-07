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
import Footer from 'components/layout/Footer';

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
        <Footer />
      </main>
      <footer></footer>
    </div>
  );
}
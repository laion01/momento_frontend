import Head from 'next/head';
import { useEffect } from 'react';
import Script from "next/script";
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
        <title>Momento Lockets</title>
        <meta name="description" content="Momento" />
        <link rel="icon" href="/momento.png" />
      </Head>
      <script type="text/javascript" src="https://js.live.net/v7.2/OneDrive.js"/>

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
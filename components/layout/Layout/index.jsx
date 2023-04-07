import Header from "../Header";

import { ClipLoader } from 'react-spinners'
import { useUtil } from "store/hook";
import BgEffect from "components/BgEffect";
import Staking from "components/Staking";
import HeroSection from "components/LandingPage/HeroSection";
import VideoSection from "components/LandingPage/VideoSection";
import AlbumSection from "components/LandingPage/AlbumSection";
import MemoriesSection from "components/LandingPage/MemoriesSection";
import HowSection from "components/LandingPage/HowSection";
import Rings from "components/utils/Rings";
import LocketsSection from "components/LandingPage/LocketsSection";
import NewsSection from "components/LandingPage/NewsSection";

export default function Layout({ children }) {
    const { isOverlay, isSpinner } = useUtil();

    return (
        <div className="">
            <Header />

            {/* <div className="relative drop-shadow-xxl bg-[#0D0C0C]"> */}
                {/* <div className="absolute top-0 left-0 w-full h-full">
                    <BgEffect/>
                </div> */}
                {/* <Staking /> */}
            {/* </div> */}
            <HeroSection />
            <VideoSection />
            <AlbumSection />
            <MemoriesSection />
            <HowSection />
            <LocketsSection />
            <NewsSection />
            { isSpinner &&
                <div className='z-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <ClipLoader speedMultiplier={0.5} color='blue' size={50}/>
                </div>
            }
            { isOverlay &&
                <div className='z-100 fixed w-screen h-screen top-0 left-0 bg-[#00000070]'>
                </div>
            }
        </div>
    )
}
import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useRouter } from "next/router"

export default function MemoriesSection() {
    const router = useRouter()
    const [isVideo, openVideo] = useState(false);

    return (
        <div className="mx-[20px] md:mx-[40px] w-[calc(100vw-40px)] md:w-[calc(100vw-80px)] bg-[#F5F5F5] flex flex-col justify-center relative pt-[20px]">
            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-[#AC8118] text-center mt-[100px] mb-[40px]">
                Memories
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center mb-[3rem] md:mb-[5rem] lg: mb-[7rem] xl:mb-[11rem] px-[1.5rem]">
                <div className="w-full max-w-[406px] flex flex-col justify-center items-start md:items-end mr-[146px]">
                    <h3 className="text-[#747067] text-[1.5rem] leading-[2.25rem] mb-[2rem] font-bold text-left md:text-right">A collection of life’s best moments</h3>
                    <p className="text-[#747067] text-[1.125rem] leading-[2.25rem] text-left md:text-right mb-[2rem]">
                        Start a digital photo album by selecting photos from Google photos, ICloud photos or create one from scratch to bring photos from your phone into your Momento Photo Locket.
                    </p>
                    <button className="text-white bg-[#996D01] rounded-full h-[3rem] px-[1.5rem] mb-[20px]"
                        onClick={() => {router.push("/lockets")}}
                    > Shop Now </button>
                </div>
                <div>
                    <Image alt="" width={406} height={488} src="/images/memory1.jpg"/>
                </div>
            </div>
            <div className="w-full relative mb-[3rem] md:mb-[5rem] lg: mb-[7rem] xl:mb-[11rem] px-[1.5rem]">
                <div className="2xl:px-[269px] xl:px-[210px] lg:px-[100px] px-[0px]">
                    <Image alt="" src={'/images/videoback3.jpg'} width={1372} height={780} />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <button className="flex items-center px-[16px]" onClick={() => {openVideo(true)}}>
                        <div className="w-[46.67px] h-[46.67px] pl-[5px] mix-blend-lighten bg-white rounded-full mr-[16px] flex justify-center items-center">
                            <FontAwesomeSvgIcon icon={faPlay} width={32} height={32} />
                        </div>  
                        <p className="text-primary text-[2rem] text-white"> How it works </p>
                    </button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center mb-[3rem] md:mb-[5rem] lg: mb-[7rem] xl:mb-[11rem] px-[1.5rem]">
                <div className="mr-[0px] md:mr-[146px]">
                    <Image alt="" width={406} height={488} src="/images/memory2.jpg"/>
                </div>
                <div className="w-full max-w-[406px] flex flex-col justify-center">
                    <h3 className="text-[#747067] text-[1.5rem] font-bold leading-[2.25rem] mb-[2rem]"> Make her day picture perfect with Momento Photo Locket </h3>
                    <p className="text-[#747067] text-[1.125rem] leading-[2.25rem] mb-[2rem]">
                        Turn your favorite photos into thoughtful gifts for all the moms and special people in your life. Customize your Momento® Digital Locket by adding videos, photos, voice and text messages of your special moments.
                    </p>
                    <button className="text-white bg-[#996D01] rounded-full h-[3rem] px-[1.5rem]"> Customize Your Locket </button>
                </div>
            </div>
            <div className="w-full relative mb-[3rem] md:mb-[5rem] lg: mb-[7rem] xl:mb-[11rem] px-[1.5rem]">
                <div className="2xl:px-[269px] xl:px-[210px] lg:px-[100px] px-[0px]">
                    <Image alt="" src={'/images/videoback4.jpg'} width={1372} height={780} />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <button className="flex items-center px-[16px]" onClick={() => {openVideo(true)}}>
                        <div className="w-[46.67px] h-[46.67px] pl-[5px] mix-blend-lighten bg-white rounded-full mr-[16px] flex justify-center items-center">
                            <FontAwesomeSvgIcon icon={faPlay} width={32} height={32} />
                        </div>  
                        <p className="text-white text-[2rem] text-white]"> How it works </p>
                    </button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center px-[1.5rem]">
                <div className="w-full max-w-[406px] flex flex-col justify-center items-end mr-[146px]">
                    <h3 className="text-[#747067] text-[1.5rem] leading-[2.25rem] font-bold text-left md:text-right mb-[2rem]">Family’s big and small moments for the next generation</h3>
                    <p className="text-[#747067] text-[1.125rem] leading-[2.25rem] text-left md:text-right">
                    Imagine 50 years from now, you will say to your son and daughter, “every precious moment in your live from the day you were born is in this Momento Locket.
                    </p>
                    <button className="text-white bg-[#996D01] rounded-full h-[3rem] px-[1.5rem] mb-[20px]"
                        onClick={() => {router.push("/lockets")}}
                    > Shop Now </button>
                </div>
                <div>
                    <Image alt="" width={406} height={488} src="/images/memory3.jpg"/>
                </div>
            </div>

            { isVideo &&
                <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000a0] z-50 flex justify-center items-center" onClick={() => {
                    openVideo(false)
                }}>
                    <video controls src="/videos/home_popup_video.mp4" onClick={(e) => {e.stopPropagation()}}>
                        Your browser does not support the video tag.
                    </video>
                </div>
            }
        </div>
    )
}
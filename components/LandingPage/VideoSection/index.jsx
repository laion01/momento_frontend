import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function VideoSection() {
    const [isVideo, openVideo] = useState(false);

    return (
        <div className="mx-[20px] md:mx-[40px] w-[calc(100vw-40px)] md:w-[calc(100vw-80px)] bg-[#F5F5F5] flex justify-center relative">
            <div className="2xl:px-[269px] xl:px-[210px] lg:px-[100px] px-[50px]">
                <Image alt="" src={'/images/videoback1.jpg'} width={1372} height={780} />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <button className="flex items-center px-[16px]" onClick={() => {openVideo(true)}}>
                    <div className="w-[46.67px] h-[46.67px] pl-[5px] mix-blend-lighten bg-white rounded-full mr-[16px] flex justify-center items-center">
                        <FontAwesomeSvgIcon icon={faPlay} width={32} height={32} />
                    </div>  
                    <p className="text-primary text-[2rem] text-white"> How it works </p>
                </button>
            </div>
            
            { isVideo &&
                <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000a0] z-50 flex justify-center items-center" onClick={() => {
                    openVideo(false)
                }}>
                    <video controls src="/videos/home_popup_video.mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            }
        </div>
    )
}
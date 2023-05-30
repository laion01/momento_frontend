import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Item({label, video}) {
    const [isOpen, openVideo] = useState(false);

    return (
        <div className="relative m-[12px]">
            <p className="text-[#747067] text-[1.5rem] text-center leading-[2.25rem] mb-[1.625rem]"> { label } </p>
            <div className="w-[436px] h-[279px]">
                <Image alt="" src={video} width={436} height={279} />
            </div>
            <div className="absolute bottom-[120px] left-0 w-full flex justify-center items-center">
                <button className="flex items-center px-[16px]" 
                    onClick={() => {openVideo(true)}}
                >
                    <div className="w-[46.67px] h-[46.67px] pl-[5px] mix-blend-lighten bg-white rounded-full mr-[16px] flex justify-center items-center">
                        <FontAwesomeSvgIcon icon={faPlay} width={32} height={32} />
                    </div>
                </button>
            </div>
            { isOpen && 
                <div className="fixed top-0 left-0 bg-[#000000a0] w-[100vw] h-[100vh] flex justify-center items-center z-50 p-[1rem] md:p-[5rem]"
                    onClick={() => {openVideo(false)}}
                >
                    <iframe
                        src="https://www.youtube.com/embed/5IOfVRq-tJw?autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        className="w-full h-full"
                    />
                </div>
            }
            
        </div>
    )
}
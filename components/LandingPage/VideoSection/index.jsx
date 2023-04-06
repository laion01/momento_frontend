import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export default function VideoSection() {
    return (
        <div className="mx-[40px] bg-[#F5F5F5] flex justify-center relative">
            <div className="px-[269px]">
                <Image alt="" src={'/images/videoback1.jpg'} width={1372} height={780} />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <button className="flex items-center px-[16px]">
                    <div className="w-[46.67px] h-[46.67px] bg-white rounded-full mr-[16px] flex justify-center items-center">
                        <FontAwesomeSvgIcon icon={faPlay} width={32} height={32} />
                    </div>  
                    <p className="text-[#996D01] text-[32px] text-white"> How it works </p>
                </button>
            </div>
        </div>
    )
}
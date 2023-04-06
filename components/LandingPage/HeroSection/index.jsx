import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export default function HeroSection() {
    return (
        <div className="mx-[40px] bg-[#F5F5F5] relative flex flex-col justify-start items-center relative">
            <div className="w-[223px] h-[332px]">
                <Image alt="" src={'/images/Jewelry-Digital-Locket 6.png'} width={223} height={332}/>
            </div>
            <div className="-mt-[9px] relative">
                <Image alt="" src={'/images/Phone 1.png'} width={394} height={746}/>
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-end pb-[182px]">
                    <div className="w-[17.73px] h-[30px] rounded-full border-[2px] border-[#747067] flex justify-center pt-[6.2px]">
                        <div className="w-[5.21px] h-[5.21px] bg-[#747067] rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="absolute right-0 top-[476px] pr-[156px] pl-[100px] w-[calc(50vw-197px-80px)] h-full">
                <h1 className="text-[40px] text-[#AC8118] leading-[56px] mb-[24px]">
                    The Jewelry That Holds Your Family Photo Album
                </h1>
                <p className="text-[#747067] text-[18px] mb-[32px]">
                    The Momento™ Digital Locket is a piece of smart jewelry that holds all your special moments close to your heart.
                </p>
                <div className="flex items-center">
                    <button className="text-white text-[16px] bg-[#996D01] rounded-full h-[48px] px-[24px] mr-[50px]"> Show Now</button>
                    <button className="flex items-center px-[16px]">
                        <div className="w-[20px] h-[20px] bg-[#996D01] rounded-full mr-[10px] text-white">
                            <FontAwesomeSvgIcon icon={faPlay} width={16} height={16} />
                        </div>
                        <p className="text-[#996D01] text-[16px]"> Watch Video </p>
                    </button>
                </div>
            </div>
        </div>
    )
}
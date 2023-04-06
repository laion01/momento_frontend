import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export default function HeroSection() {
    return (
        <div className="mx-[20px] md:mx-[40px] w-[calc(100vw-40px)] md:w-[calc(100vw-80px)] bg-[#F5F5F5] relative flex flex-col justify-start items-center relative px-[1.5rem]">
            <div className="W-1/3 md:w-[223px]">
                <Image alt="" src={'/images/jewelry.png'} width={223} height={332}/>
            </div>
            <div className="-mt-[9px] relative">
                <Image alt="" src={'/images/phone.png'} width={394} height={746}/>
                <div className="absolute w-full h-full top-0 left-0 flex justify-center items-end pb-[182px]">
                    <div className="w-[17.73px] h-[30px] rounded-full border-[2px] border-[#747067] flex justify-center pt-[6.2px]">
                        <div className="w-[5.21px] h-[5.21px] bg-[#747067] rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="lg:absolute lg:right-0 flex flex-col lg:h-[100vh] justify-center mt-[20px] lg:mt-[100px] w-full lg:w-[calc(50vw-220px)] h-full  px-[1.5rem] pl-[20px] 2xl:pr-[156px] 2xl:pl-[40px] xl:pr-[120px] lg:pr-[50px]">
                <h1 className="text-[40px] text-[#AC8118] leading-[56px] mb-[24px]">
                    The Jewelry That Holds Your Family Photo Album
                </h1>
                <p className="text-[#747067] text-[1.125rem] mb-[32px]">
                    The Momento™ Digital Locket is a piece of smart jewelry that holds all your special moments close to your heart.
                </p>
                <div className="flex flex-wrap items-center pb-[20px]">
                    <button className="text-white text-[1rem] bg-[#996D01] rounded-full h-[3rem] px-[1.5rem] mr-[50px] mb-[20px]"> Show Now</button>
                    <button className="flex items-center px-[16px]  mb-[20px]">
                        <div className="w-[1.25rem] h-[1.25rem] bg-[#996D01] rounded-full mr-[10px] text-white flex justify-center items-center">
                            <FontAwesomeSvgIcon icon={faPlay} width={12} height={12} />
                        </div>
                        <p className="text-[#996D01] text-[1rem]"> Watch Video </p>
                    </button>
                </div>
            </div>
        </div>
    )
}
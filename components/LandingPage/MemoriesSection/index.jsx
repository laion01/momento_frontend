import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export default function MemoriesSection() {
    return (
        <div className="mx-[40px] bg-[#F5F5F5] flex flex-col justify-center relative pt-[20px]">
            <h2 className="text-[100px] text-[#AC8118] text-center mt-[100px] mb-[40px]">
                Memories
            </h2>
            
            <div className="flex justify-center mb-[175px]">
                <div className="w-[406px] flex flex-col justify-center items-end mr-[146px]">
                    <h3 className="text-[#747067] text-[24px] leading-[36px] mb-[32px] font-bold text-right">A collection of life’s best moments</h3>
                    <p className="text-[#747067] text-[18px] leading-[36px] text-right mb-[32px]">
                        Start a digital photo album by selecting photos from Google photos, ICloud photos or create one from scratch to bring photos from your phone into your Momento Photo Locket.
                    </p>
                    <button className="text-white bg-[#996D01] rounded-full h-[48px] px-[24px]"> Shop Now </button>
                </div>
                <div>
                    <Image alt="" width={406} height={488} src="/images/memory1.jpg"/>
                </div>
            </div>
            <div className="w-full relative mb-[175px]">
                <div className="px-[269px]">
                    <Image alt="" src={'/images/videoback3.jpg'} width={1372} height={780} />
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
            <div className="flex justify-center mb-[175px]">
                <div className="mr-[146px]">
                    <Image alt="" width={406} height={488} src="/images/memory2.jpg"/>
                </div>
                <div className="w-[406px] flex flex-col justify-center">
                    <h3 className="text-[#747067] text-[24px] font-bold leading-[36px] mb-[32px]"> Make her day picture perfect with Momento Photo Locket </h3>
                    <p className="text-[#747067] text-[18px] leading-[36px] mb-[32px]">
                        Turn your favorite photos into thoughtful gifts for all the moms and special people in your life. Customize your Momento® Digital Locket by adding videos, photos, voice and text messages of your special moments.
                    </p>
                    <button className="text-white bg-[#996D01] rounded-full h-[48px] px-[24px]"> Customize Your Locket </button>
                </div>
            </div>
            <div className="w-full relative mb-[175px]">
                <div className="px-[269px]">
                    <Image alt="" src={'/images/videoback4.jpg'} width={1372} height={780} />
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
            <div className="flex justify-center">
                <div className="w-[406px] flex flex-col justify-center items-end mr-[146px]">
                    <h3 className="text-[#747067] text-[24px] leading-[36px] font-bold text-right mb-[32px]">Family’s big and small moments for the next generation</h3>
                    <p className="text-[#747067] text-[18px] leading-[36px] text-right">
                    Imagine 50 years from now, you will say to your son and daughter, “every precious moment in your live from the day you were born is in this Momento Locket.
                    </p>
                    <button className="text-white bg-[#996D01] rounded-full h-[48px] px-[24px]"> Shop Now </button>
                </div>
                <div>
                    <Image alt="" width={406} height={488} src="/images/memory3.jpg"/>
                </div>
            </div>
        </div>
    )
}
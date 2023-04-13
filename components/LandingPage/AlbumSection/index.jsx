import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export default function AlbumSection() {
    return (
        <div className="mx-[20px] md:mx-[40px] w-[calc(100vw-40px)] md:w-[calc(100vw-80px)] bg-[#F5F5F5] flex flex-col justify-center relative pt-[120px]">
            <div className="flex flex-col md:flex-row justify-center items-center px-[1.5rem]">
                <div className="md:mr-[50px] lg:mr-[80px] xl:mr[100px] 2xl:mr-[146px]">
                    <Image alt="" width={406} height={488} src="/images/album1.jpg"/>
                </div>
                <div className="md:mt-[80px]">
                    <Image alt="" width={406} height={488} src="/images/album2.jpg"/>
                </div>
            </div>
            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-[#AC8118] text-center mt-[100px] mb-[120px]">
                Create your Family Album
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center px-[1.5rem] mb-[3rem] md:mb-[5rem] lg: mb-[7rem] xl:mb-[11rem]">
                <div className="md:mr-[50px] lg:mr-[80px] xl:mr[100px] 2xl:mr-[146px]">
                    <Image alt="" width={406} height={488} src="/images/album3.jpg"/>
                </div>
                <div className="w-full max-w-[406px] flex flex-col justify-center">
                    <h3 className="text-[#747067] text-[1.5rem] leading-[2.25rem] mb-[2rem] font-bold">The new way to keep your Family photo album with you always</h3>
                    <p className="text-[#747067] text-[1.125rem] leading-[2.25rem] mb-[2rem]">
                        The Momento® Digital Locket is the perfect merger of art and technology. You can easily add videos, photos, voice and text messages to your Momento Digital Locket and access all these special memories anytime by simply tapping any NFC compatible phone to the jewelry.
                    </p>
                    <button className="text-white bg-[#996D01] rounded-full h-[3rem] px-[1.5rem]"> Get Your Digital Locket </button>
                </div>
            </div>
            <div className="w-full relative">
                <div className="2xl:px-[269px] xl:px-[210px] lg:px-[100px] px-[50px]">
                    <Image alt="" src={'/images/videoback2.jpg'} width={1372} height={780} />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <button className="flex items-center px-[16px]">
                        <div className="w-[46.67px] h-[46.67px] pl-[5px] mix-blend-lighten bg-white rounded-full mr-[16px] flex justify-center items-center">
                            <FontAwesomeSvgIcon icon={faPlay} width={32} height={32} />
                        </div>  
                        <p className="text-primary text-[2rem] text-white"> How it works </p>
                    </button>
                </div>
            </div>
            
        </div>
    )
}
import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export default function AlbumSection() {
    return (
        <div className="mx-[40px] bg-[#F5F5F5] flex flex-col justify-center relative pt-[120px]">
            <div className="flex justify-center">
                <div className="mr-[146px]">
                    <Image alt="" width={406} height={488} src="/images/album1.jpg"/>
                </div>
                <div className="mt-[50px]">
                    <Image alt="" width={406} height={488} src="/images/album2.jpg"/>
                </div>
            </div>
            <h2 className="text-[100px] text-[#AC8118] text-center mt-[100px] mb-[120px]">
                Create your Family Album
            </h2>
            <div className="flex justify-center mb-[175px]">
                <div className="mr-[146px]">
                    <Image alt="" width={406} height={488} src="/images/album3.jpg"/>
                </div>
                <div className="w-[406px] flex flex-col justify-center">
                    <h3 className="text-[#747067] text-[24px] font-bold">The new way to keep your Family photo album with you always</h3>
                    <p className="text-[#747067] text-[18px]">
                        The Momento® Digital Locket is the perfect merger of art and technology. You can easily add videos, photos, voice and text messages to your Momento Digital Locket and access all these special memories anytime by simply tapping any NFC compatible phone to the jewelry.
                    </p>
                    <div className="mt-[24px]">
                        <button className="text-white bg-[#996D01] rounded-full h-[48px] px-[24px]"> Get Your Digital Locket </button>
                    </div>
                </div>
            </div>
            <div className="w-full relative">
                <div className="px-[269px]">
                    <Image alt="" src={'/images/videoback2.jpg'} width={1372} height={780} />
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
            
        </div>
    )
}
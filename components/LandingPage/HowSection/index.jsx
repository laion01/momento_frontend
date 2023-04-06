import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export default function HowSection() {
    return (
        <div className="mx-[40px] bg-[#F5F5F5] flex flex-col justify-center relative pt-[20px]">
            <h2 className="text-[100px] text-[#AC8118] text-center mt-[100px] mb-[40px]">
                How does it work?
            </h2>
            
            
            <div className="flex justify-center mb-[175px]">
                <div className="mr-[146px]">
                    <Image alt="" width={591} height={590} src="/images/howwork.png"/>
                </div>
                <div className="w-[591px] flex flex-col justify-center">
                    <h3 className="text-[#747067] text-[24px] font-bold mb-[10px]">It&apos;s easy to create a Momento Photo Locket and save your cherished memories in 3 steps.</h3>
                    <div className="flex items-start mb-[16px]">
                        <p className="min-w-[27px] h-[27px] mr-[10px] leading-[27px] text-center rounded-full bg-[#996D01] text-white"> 1 </p>
                        <p className="text-[#747067] text-[16px] leading-[27px]">
                            Choose a pendant
                        </p>
                    </div>
                    <div className="flex items-start mb-[16px]">
                        <p className="min-w-[27px] h-[27px] mr-[10px] leading-[27px] text-center rounded-full bg-[#996D01] text-white"> 2 </p>
                        <p className="text-[#747067] text-[16px] leading-[27px]">
                            Create an account
                        </p>
                    </div>
                    <div className="flex items-start mb-[16px]">
                        <p className="min-w-[27px] h-[27px] mr-[10px] leading-[27px] text-center rounded-full bg-[#996D01] text-white"> 3 </p>
                        <p className="text-[#747067] text-[16px] leading-[27px]">
                            Upload photos after you receive the jewelry by importing from Google Photos, iCloud, or your phone.
                        </p>
                    </div>
                    <div className="flex items-start mb-[16px]">
                        <p className="min-w-[27px] h-[27px] mr-[10px] leading-[27px] text-center rounded-full bg-[#996D01] text-white"> 4 </p>
                        <p className="text-[#747067] text-[16px] leading-[27px]">
                            Tap your Locket to to your phone to see all your memories.
                        </p>
                    </div>
                    <p className="text-[#747067] text-[18px] mt-[10px]">
                        To learn more on how to use Momento App, <span className="font-bold">click here.</span>
                    </p>
                </div>
            </div>
            
        </div>
    )
}
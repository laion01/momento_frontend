import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export default function Item({label, video}) {
    return (
        <div className="relative m-[12px]">
            <p className="text-[#747067] text-[1.5rem] text-center leading-[2.25rem] mb-[1.625rem]"> { label } </p>
            <div className="w-[436px] h-[279px]">
                <Image alt="" src={video} width={436} height={279} />
            </div>
            <div className="absolute bottom-[120px] left-0 w-full flex justify-center items-center">
                <button className="flex items-center px-[16px]">
                    <div className="w-[46.67px] h-[46.67px] pl-[5px] mix-blend-lighten bg-white rounded-full mr-[16px] flex justify-center items-center">
                        <FontAwesomeSvgIcon icon={faPlay} width={32} height={32} />
                    </div>
                </button>
            </div>
        </div>
    )
}
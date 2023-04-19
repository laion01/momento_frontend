import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

export default function ImageItem({image, type, onClick}) {
    return (
        <button className="aspect-square w-[7.75rem] relative rounded-[0.5rem] p-[0.5rem]" onClick={() => {onClick && onClick(image, type)}}>
            <div className="w-full h-full flex justify-center items-center">
                <Image alt="" src={image} width={120} height={120}/>
            </div>
            { type == "mp4" && 
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <FontAwesomeSvgIcon icon={faPlay} width={32} height={32} color="white"/>
                </div>
            }
        </button>
    )
}
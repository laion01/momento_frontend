import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faImage, faPlay, faTrash } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import { useState } from "react"

export default function ImageItem({ image, type, onClick, onDelete, removable }) {
    const [isOpen, openImage] = useState(false);

    const onItemClicked = () => {
        if (onClick) {
            onClick(image);
        } else {
            openImage(true)
        }
    }

    return (
        <>
            <div className="aspect-square w-[7.75rem] relative rounded-[0.5rem] p-[0.5rem] overflow-hidden relative" >
                <div className="w-full h-full flex justify-center items-center">
                    <Image alt="" src={image} width={120} height={120} />
                </div>
                <div className="absolute w-[6.75rem] h-[6.75rem] rounded-[0.5rem] p-[0.5rem] m-[0.5rem] top-0 left-0 bg-[#00000040] flex justify-end items-start absolute opacity-0 hover:opacity-[1] transition-all duration-300">
                    <div className="w-full h-full top-0 left-0 flex justify-center items-center absolute">
                        <button onClick={() => { onItemClicked() }}>
                            <FontAwesomeSvgIcon icon={type == "mp4" ? faPlay : faImage} width={32} height={32} color="white" />
                        </button>
                    </div>
                    {removable &&
                        <button onClick={() => { onDelete() }} className="z-10">
                            <FontAwesomeSvgIcon icon={faTrash} width={16} height={16} color="white" />
                        </button>
                    }
                </div>
            </div>
            {isOpen &&
                <div className="fixed top-[0px] left-0 w-[100vw] h-[100vh] bg-[#00000080] backdrop-blur-md p-[5rem] z-50 flex justify-center items-center">
                    <img alt="" src={image} className="" />
                </div>
            }

        </>

    )
}
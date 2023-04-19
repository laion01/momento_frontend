import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import ImageItem from "../ImageItem"
import Image from "next/image"

export default function RecentFiles({ onSelectImage, onClose }) {
    return (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] backdrop-blur-md justify-center flex">
            <div className="container mt-[100px] flex flex-col bg-white p-[1.875rem] pt-[0.5rem] h-fit shadow">
                <div className="flex justify-between items-center mb-[10px]">
                    <p className="text-primary text-[2.5rem] ml-[10px]"> Upload files </p>
                    <button className="text-[#747067] flex justify-center items-center" onClick={() => { onClose(false) }}>
                        <FontAwesomeSvgIcon icon={faClose} width={20} height={20} className="text-[#747067]" />
                    </button>
                </div>
                <div className="border-[1px] border-[#BDBDBD] text-primary px-[20px] py-[10px]">
                    <p> My Photos </p>
                </div>
                <div className="border-[1px] border-t-[0px] border-[#BDBDBD] px-[1rem] py-[0.5rem] flex bg-[#F5F5F5] flex-col">
                    <div className="flex items-center mb-[0.25rem]">
                        <Image alt="" src="/images/check.svg" width={24} height={24} />
                        <p className="text-primary text-[1.125rem] font-bold leading-[1.6875rem]"> File successfully received </p>
                    </div>
                    <p className="text-primary text-[1.125rem] font-bold leading-[1.6875rem]  mb-[0.75rem]"> Your file has been successfully received by our system and is being processed now </p>

                    <div className="flex flex-wrap">
                        {images.map((item, index) =>
                            <ImageItem key={index} image={item.image} type={item.type} onClick={(image) => { onSelectImage(image), onClose(false) }} />
                        )}
                        <div className="md:w-1/4 w-1/3"></div>
                        <div className="md:w-1/4 w-1/3"></div>
                        <div className="md:w-1/4 w-1/3"></div>
                        <div className="md:w-1/4 w-1/3"></div>
                        <div className="md:w-1/4 w-1/3"></div>
                        <div className="md:w-1/4 w-1/3"></div>
                        <div className="md:w-1/4 w-1/3"></div>
                        <div className="md:w-1/4 w-1/3"></div>
                        <div className="md:w-1/4 w-1/3"></div>
                        <div className="md:w-1/4 w-1/3"></div>
                        <div className="md:w-1/4 w-1/3"></div>
                    </div>
                </div>
            </div>


        </div>
    )
}


const images = [
    {
        image: "/images/memories/1.png",
        type: "png",
    }, {
        image: "/images/memories/2.png",
        type: "png",
    }, {
        image: "/images/memories/3.png",
        type: "png",
    }, {
        image: "/images/memories/4.png",
        type: "png",
    }, {
        image: "/images/memories/5.png",
        type: "mp4",
    }, {
        image: "/images/memories/6.png",
        type: "mp4",
    }, {
        image: "/images/memories/7.png",
        type: "png",
    }, {
        image: "/images/memories/8.png",
        type: "png",
    }, {
        image: "/images/memories/1.png",
        type: "png",
    }, {
        image: "/images/memories/2.png",
        type: "mp4",
    }, {
        image: "/images/memories/3.png",
        type: "png",
    }, {
        image: "/images/memories/4.png",
        type: "png",
    }, {
        image: "/images/memories/5.png",
        type: "png",
    }, {
        image: "/images/memories/6.png",
        type: "png",
    }, {
        image: "/images/memories/7.png",
        type: "png",
    }, {
        image: "/images/memories/8.png",
        type: "png",
    }, {
        image: "/images/memories/1.png",
        type: "png",
    }, {
        image: "/images/memories/2.png",
        type: "png",
    }, {
        image: "/images/memories/3.png",
        type: "png",
    }, {
        image: "/images/memories/4.png",
        type: "png",
    }, {
        image: "/images/memories/5.png",
        type: "png",
    }, {
        image: "/images/memories/6.png",
        type: "png",
    }, {
        image: "/images/memories/7.png",
        type: "png",
    }, {
        image: "/images/memories/8.png",
        type: "png",
    }, {
        image: "/images/memories/4.png",
        type: "png",
    }, {
        image: "/images/memories/1.png",
        type: "png",
    }
]
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import ImageItem from "components/utils/ImageItem"
import Image from "next/image"
import { useRef, useState } from "react"
import { useUtil } from "store/hook"

export default function GalleryPopup({ onClose, productImages, productId, data }) {
    const { metals, colors, lockets, productTypes } = useUtil();

    const [image, setImage] = useState(null);
    const [uploadedImageURL, setUploadedURL] = useState();
    const [isVisible, showDetails] = useState(false);
    const [amount, setAmount] = useState(0);
    const imageInput = useRef(null);
    const [images, setImageList] = useState(test_images);
    const getTypeName = (t) => {
        for(let i = 0 ;i < productTypes.length; i++) {
            if(productTypes[i].id == t)
                return productTypes[i].name
        }
    }

    const getMetal = (id) => {
        for(let i = 0 ;i < metals.length; i++) {
            if(metals[i].id == id) {
                return metals[i];
            }
        }
        return {name : '', image: ''}
    }

    const getColor = (id) => {
        for(let i = 0 ;i < colors.length; i++) {
            if(colors[i].id == id) {
                return colors[i];
            }
        }
        return {name : '', image: ''}
    }

    const getLocket = (id) => {
        for(let i = 0 ;i < lockets.length; i++) {
            if(lockets[i].id == id)
                return lockets[i]
        }
        return {name : '', type: 0}
    }

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setUploadedURL(URL.createObjectURL(i));
        }
    };

    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", image);
        const response = await fetch("/api/file/products", {
            method: "POST",
            body
        });
    };

    return (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] backdrop-blur-md justify-center flex">
            <div className="container mt-[100px] flex flex-col bg-white p-[1.875rem] pt-[0.5rem] h-fit shadow">
                <div className="flex justify-between items-center mb-[10px]">
                    <p className="text-primary text-[2.5rem] ml-[10px]"> { getLocket(data.locket_id).name }-{getTypeName(getLocket(data.locket_id).type)} </p>
                    <button className="text-[#747067] flex justify-center items-center" onClick={() => { onClose(false) }}>
                        <FontAwesomeSvgIcon icon={faClose} width={20} height={20} className="text-[#747067]" />
                    </button>
                </div>
                <div className="border-[1px] border-[#BDBDBD] text-primary px-[20px] py-[10px] flex justify-between">
                    <p> My Photos </p>
                    <input ref={imageInput} type="file" name="myImage" onChange={uploadToClient} hidden />
                    <button className="bg-primary px-[1rem] py-[0.5rem] text-white rounded-[0.25rem]"
                        onClick={() => { imageInput.current.click() }}
                    > + Upload Image </button>
                </div>
                <div className="border-[1px] border-t-[0px] border-[#BDBDBD] px-[1rem] py-[0.5rem] flex bg-[#F5F5F5] flex-col">
                    {/* <div className="flex items-center mb-[0.25rem]">
                        <Image alt="" src="/images/check.svg" width={24} height={24} />
                        <p className="text-primary text-[1.125rem] font-bold leading-[1.6875rem]"> File successfully received </p>
                    </div>
                    <p className="text-primary text-[1.125rem] font-bold leading-[1.6875rem]  mb-[0.75rem]"> Your file has been successfully received by our system and is being processed now </p> */}

                    <div className="flex flex-wrap justify-center">
                        {images.map((item, index) =>
                            <ImageItem key={index} image={item.image} type={item.type} removable/>
                        )}
                        <div className="w-[7.75rem]"></div>
                        <div className="w-[7.75rem]"></div>
                        <div className="w-[7.75rem]"></div>
                        <div className="w-[7.75rem]"></div>
                        <div className="w-[7.75rem]"></div>
                        <div className="w-[7.75rem]"></div>
                        <div className="w-[7.75rem]"></div>
                        <div className="w-[7.75rem]"></div>
                        <div className="w-[7.75rem]"></div>
                    </div>
                </div>
            </div>


        </div>
    )
}


const test_images = [
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
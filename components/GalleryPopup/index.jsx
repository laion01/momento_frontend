import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faClose, faImage, faSave, faTrash } from "@fortawesome/free-solid-svg-icons"
import ImageItem from "components/utils/ImageItem"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useUtil } from "store/hook"
import UTILS_API from "api/Util"
import { useDispatch } from "react-redux"
import { setProducts } from "store/slices/utilSlice"

export default function GalleryPopup({ onClose, productImages, productId, data }) {
    const dispatch = useDispatch()
    const { metals, colors, lockets, productTypes, products } = useUtil();

    const [image, setImage] = useState(null);
    const [uploadedImageURL, setUploadedURL] = useState();
    const [isVisible, showDetails] = useState(false);
    const [amount, setAmount] = useState(0);
    const imageInput = useRef(null);
    const [images, setImageList] = useState([]);

    const getTypeName = (t) => {
        for (let i = 0; i < productTypes.length; i++) {
            if (productTypes[i].id == t)
                return productTypes[i].name
        }
    }

    const getMetal = (id) => {
        for (let i = 0; i < metals.length; i++) {
            if (metals[i].id == id) {
                return metals[i];
            }
        }
        return { name: '', image: '' }
    }

    const getColor = (id) => {
        for (let i = 0; i < colors.length; i++) {
            if (colors[i].id == id) {
                return colors[i];
            }
        }
        return { name: '', image: '' }
    }

    const getLocket = (id) => {
        for (let i = 0; i < lockets.length; i++) {
            if (lockets[i].id == id)
                return lockets[i]
        }
        return { name: '', type: 0 }
    }

    const uploadToClient = async (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setUploadedURL(URL.createObjectURL(i));
        }
    };

    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", image);
        const response = await fetch("/api/file/productImage", {
            method: "POST",
            body
        });

        const res = await response.text();
        const p = await UTILS_API.addProductImage({productId: data.id, filename: JSON.parse(res).filename});
        dispatch(setProducts({products: p.products}));
        setImageList([...images, { pathname: JSON.parse(res).filename, type: "png", width: 120, height:120, id:p?.fileId}])

        setUploadedURL('');
        return JSON.parse(res).filename;
    };

    const onDeleteImage = async (item) => {

        const p = await UTILS_API.removeProductImage({id: item.id});
        dispatch(setProducts({products: p.products}));

        const newArray = [];
        images.map((image) => {
            if(image.id != item.id)
                newArray.push(image)
        })

        setImageList([...newArray]);
    }

    useEffect(() => {
        setImageList([...data.Files])
    }, [data.Files])

    return (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] backdrop-blur-md justify-center flex">
            <div className="container mt-[100px]  max-h-[calc(100vh-9rem)] md:max-h-[calc(100vh-7.5rem)] overflow-y-hidden flex flex-col bg-white p-[1.875rem] pt-[0.5rem] h-fit shadow">
                <div className="flex justify-between items-center mb-[10px]">
                    <p className="text-primary text-[2.5rem] ml-[10px]"> {getLocket(data.locket_id).name}-{getTypeName(getLocket(data.locket_id).type)} </p>
                    <button className="text-[#747067] flex justify-center items-center" onClick={() => { onClose(false) }}>
                        <FontAwesomeSvgIcon icon={faClose} width={20} height={20} className="text-[#747067]" />
                    </button>
                </div>
                <div className="border-[1px] border-[#BDBDBD] text-primary px-[20px] py-[10px] flex justify-between">
                    <p> My Photos </p>
                    <input ref={imageInput} type="file" onChange={uploadToClient} hidden />
                    <button className="bg-primary px-[1rem] py-[0.5rem] text-white rounded-[0.25rem]"
                        onClick={() => { imageInput.current.click() }} disabled={uploadedImageURL}
                    > + Upload Image </button>
                </div>
                <div className="border-[1px] border-t-[0px] border-[#BDBDBD] px-[1rem] py-[0.5rem] flex bg-[#F5F5F5] flex-col overflow-hidden">
                    {/* <div className="flex items-center mb-[0.25rem]">
                        <Image alt="" src="/images/check.svg" width={24} height={24} />
                        <p className="text-primary text-[1.125rem] font-bold leading-[1.6875rem]"> File successfully received </p>
                    </div>
                    <p className="text-primary text-[1.125rem] font-bold leading-[1.6875rem]  mb-[0.75rem]"> Your file has been successfully received by our system and is being processed now </p> */}

                    <div className="flex flex-wrap justify-center items-center overflow-y-auto h-full grow">
                        {images.map((item, index) =>
                            <ImageItem key={index} image={item.pathname} type={item.type} removable onDelete={() => {onDeleteImage(item)}} />
                        )}
                        {uploadedImageURL &&
                            <div className="aspect-square w-[7.75rem] relative rounded-[0.5rem] p-[0.5rem] overflow-hidden relative" >
                                <div className="w-full h-full flex justify-center items-center">
                                    <Image alt="" src={uploadedImageURL} width={120} height={120} />
                                </div>

                                <div className="absolute w-[6.75rem] h-[6.75rem] rounded-[0.5rem] p-[0.5rem] m-[0.5rem] top-0 left-0 bg-[#00000040] flex justify-end items-start absolute opacity-[0.8] hover:opacity-[1] transition-all duration-300">
                                    <div className="w-full h-full top-0 left-0 flex justify-center items-center absolute">
                                        <button onClick={() => { uploadToServer() }}>
                                            <FontAwesomeSvgIcon icon={ faSave } width={32} height={32} color="white" />
                                        </button>
                                    </div>
                                    <button onClick={() => { setUploadedURL('') }} className="z-10">
                                        <FontAwesomeSvgIcon icon={faTrash} width={16} height={16} color="white" />
                                    </button>
                                </div>
                            </div>
                        }
                        
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
                    
                    { !uploadedImageURL && !images.length && 
                            <div className="flex justify-center items-center w-full"> 
                                <FontAwesomeSvgIcon icon={faImage} width={32} height={32} />
                                <p className="ml-[1rem] text-[1rem]"> No images exist </p>
                            </div>
                        }
                </div>
            </div>
        </div>
    )
}
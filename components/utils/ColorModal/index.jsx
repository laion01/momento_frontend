import { useState, useEffect, useRef } from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faEye, faEyeSlash, faImage } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { login } from "store/slices/authSlice";
import { useUtil } from "store/hook";

export default function ColorModal({ type, onClose, data }) {
    const dispatch = useDispatch();

    const { colors } = useUtil();
    const router = useRouter();
    const [colorName, setColorName] = useState("");

    const [image, setImage] = useState(null);
    const [uploadedImageURL, setUploadedURL] = useState();
    const imageInput = useRef(null)

    const onImageClicked = async () => {
        imageInput.current.click();
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
        const response = await fetch("/api/file", {
            method: "POST",
            body
        });
    };

    useEffect(() => {
        if(type == 2) {
            setColorName(data.name);
            setUploadedURL(data.image);
        }
    }, [])

    const onLoginClicked = async () => {
        if (colorName == "davidleiva4999@gmail.com" && productType == "admin") {
            toast.success("Login success!");

            dispatch(login({
                token: 'asdfasdf',
                firstName: 'David',
                lastName: 'Leiva',
                colorName: 'davidleiva4999@gmail.com',
                is_verify: 1,
                address: '351 Markham Streen, Toronto',
                phone: '+12055885568'
            }));

            router.push({
                pathname: '/'
            })
        } else {
            toast.error("Login Failed!");
        }
    }

    return (
        <div className="fixed w-[100vw] h-[100vh] top-0 left-0 flex justify-center items-center bg-[#00000020] backdrop-blur-sm">
            <div className="bg-white flex flex-col items-center p-[1.5rem] h-fit mx-[50px] mb-[2rem] shadow-md w-[calc(100%-40px)] md:w-[450px] mb-[2rem] rounded-[0.5rem] z-50">
                <p className="text-primary text-[1.5rem] text-center font-bold mb-[1.5rem] leading-[2.25rem]"> {type == 1 ? "Add Color" : "Edit Color"} </p>
                <div className="w-full flex h-[3rem] px-[10px] border-[1px] border-[#D4D4D4] rounded-[4px] mb-[1rem]">
                    <input type="text" value={colorName} onChange={(e) => {
                        setColorName(e.target.value)
                    }} className="w-full text-[1rem] outline-none grow" placeholder="Locket name" />
                    <button className="flex justify-center items-center" onClick={() => { onImageClicked() }}>
                        <input ref={imageInput} type="file" name="myImage" onChange={uploadToClient} hidden />

                        { !uploadedImageURL &&
                            <FontAwesomeSvgIcon width={24} height={24} icon={faImage} />
                        }
                        { uploadedImageURL &&
                            <Image alt="" width={32} height={32} src={uploadedImageURL} />
                        }
                    </button>
                </div>
                
                {/* <input type="text" value={productType} onChange={(e) => {
                        setProductType(e.target.value)
                    }} className="grow text-[1rem] outline-none" placeholder="Locket Type" /> */}
                {/* <select value={productType} onChange={(e) => { setProductType(e) }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px] mb-[1rem]">
                    { typeList.map((type, index) => {
                        <option key={index} value={index}> {type} </option>
                    })}
                </select> */}
                <div className="flex justify-end items-end w-full">
                    <button className="h-[3rem] rounded-full bg-[#d5d5d5] px-[24px] text-white text-[1rem] mb-[1rem] w-fit mr-[1rem]"
                        onClick={() => {
                            onClose()
                        }}
                    > Cancel </button>
                    <button className="h-[3rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem] mb-[1rem] w-fit"
                        onClick={() => {
                            onLoginClicked()
                        }}
                    > {type == 1 ? "Add" : "Save"} </button>
                </div>

            </div>
        </div>
    )
}


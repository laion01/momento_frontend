import { useState } from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { login } from "store/slices/authSlice";
import { useUtil } from "store/hook";
import { useEffect } from "react";
import { setLockets, setProducts } from "store/slices/utilSlice";
import UTILS_API from "api/Util";

export default function LocketModal({ type, onClose, data }) {
    const dispatch = useDispatch();

    const { products, productTypes, colors, metals } = useUtil();
    const router = useRouter();
    const [productName, setProductName] = useState("");
    const [productType, setProductType] = useState(1);

    useEffect(() => {
        if(type == 1) {
            setProductType(1)
        } else {
            setProductType(data.type)
            setProductName(data.name)
        }
    }, [type])

    const getTypeName = (t) => {
        for(let i = 0 ;i < productTypes.length; i++) {
            if(productTypes[i].id == t)
                return productTypes[i].name
        }
    }


    const onAddLocket = async () => {
        try {
            const {lockets} = await UTILS_API.addLocket({name: productName, type: productType});
            dispatch(setLockets({lockets}))

            toast.success('Locket added!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            onClose()
        } catch (e) {
            toast.error("Failed", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
    }
    
    const onUpdateLocket = async ( locket ) => {
        try {
            const lockets = await UTILS_API.updateLocket({name: productName, type: productType, id: data.id});
            dispatch(setLockets({lockets}))

            toast.success('Locket added!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            onClose()
        } catch (e) {
            toast.error("Failed", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
    }

    return (
        <div className="fixed w-[100vw] h-[100vh] top-0 left-0 flex justify-center items-center bg-[#00000020] backdrop-blur-sm">
            <div className="bg-white flex flex-col items-center p-[1.5rem] h-fit mx-[50px] mb-[2rem] shadow-md w-[calc(100%-40px)] md:w-[450px] mb-[2rem] rounded-[0.5rem] z-50">
                <p className="text-primary text-[1.5rem] text-center font-bold mb-[1.5rem] leading-[2.25rem]"> {type == 1 ? "Add Locket" : "Edit Locket"} </p>
                <input type="text" value={productName} onChange={(e) => {
                    setProductName(e.target.value)
                }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px] mb-[1rem]" placeholder="Locket name" /> 
                <select value={productType} onChange={(e) => {setProductType(e.target.value)}}className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px] mb-[1rem]">
                    { productTypes.map((t, index) =>
                        <option key={index} value={t.id}> {t.name} </option>
                    )}
                </select>
                <div className="flex justify-end items-end w-full">
                    <button className="h-[3rem] rounded-full bg-[#d5d5d5] px-[24px] text-white text-[1rem] mb-[1rem] w-fit mr-[1rem]"
                        onClick={() => {
                            onClose()
                        }}
                    > Cancel </button>
                    <button className="h-[3rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem] mb-[1rem] w-fit"
                        onClick={() => {
                            type == 1 ? onAddLocket() : onUpdateLocket()
                        }}
                    > {type == 1 ? "Add" : "Save"} </button>
                </div>

            </div>
        </div>
    )
}


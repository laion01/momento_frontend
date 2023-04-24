import { useState } from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { login } from "store/slices/authSlice";

export default function ProductModal({ type, onClose }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const [productName, setProductName] = useState("");
    const [productType, setProductType] = useState("");

    const onLoginClicked = async () => {
        if (productName == "davidleiva4999@gmail.com" && productType == "admin") {
            toast.success("Login success!");

            dispatch(login({
                token: 'asdfasdf',
                firstName: 'David',
                lastName: 'Leiva',
                productName: 'davidleiva4999@gmail.com',
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
                <p className="text-primary text-[1.5rem] text-center font-bold mb-[1.5rem] leading-[2.25rem]"> {type == 1 ? "Add Product" : "Edit Product"} </p>
                <input type="text" value={productName} onChange={(e) => {
                    setProductName(e.target.value)
                }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px] mb-[1rem]" placeholder="Locket name" />                
                <input type="text" value={productType} onChange={(e) => {
                        setProductType(e.target.value)
                    }} className="grow text-[1rem] outline-none" placeholder="Locket Type" />
                <select name="cars" id="cars" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px] mb-[1rem]">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
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


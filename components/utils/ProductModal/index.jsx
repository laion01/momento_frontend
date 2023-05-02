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

export default function ProductModal({ type, onClose, data }) {
    const dispatch = useDispatch();

    const { products, productTypes, metals, colors, lockets } = useUtil();
    const router = useRouter();
    const [locketId, setLocketId] = useState("");
    const [locketType, setLocketType] = useState(1);
    const [c_metalId, setMetalId] = useState(1);
    const [c_colorId, setColorId] = useState(2);
    const [locketNames, setLocketNames] = useState([]);
    const [locketIds, setLocketIds] = useState([]);
    const [price, setPrice] = useState(100.0);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        var uniqueNames = [];
        var uniqueIds = [];

        lockets.map((locket, index) => {
            if(!uniqueNames.includes(locket.name)) {
                uniqueNames.push(locket.name);
                uniqueIds.push(locket.id);
            }
        })
        setLocketNames(uniqueNames);
        setLocketIds(uniqueIds);
    }, [lockets])

    useEffect(() => {
        if (type == 1) {
            setLocketId(1)
        } else {
            setLocketId(data.locketId)
            setPrice(data.price)
            setAmount(data.amount)
        }
    }, [type])

    const getTypeName = (t) => {
        for (let i = 0; i < productTypes.length; i++) {
            if (productTypes[i].id == t)
                return productTypes[i].name
        }
        return "";
    }

    const getLocket = (t) => {
        for (let i = 0; i < lockets.length; i++) {
            if (lockets[i].id == t)
                return lockets[i]
        }
        return {name : "", type: 1}
    }

    const onLocketIdChange = (id) => {
        setLocketId(id);
    }

    const onAddProduct = async () => {
        const { products, error } = await UTILS_API.addProduct({ locketId: locketId, metalId: c_metalId, colorId: c_colorId, amount, price});

        if(error) {
            toast.error(error, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return ;
        }

        dispatch(setProducts({ products }))
        toast.success('Product added!', {
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
    }

    const onUpdateProduct = async (locket) => {
        try {
            const products = await UTILS_API.updateProduct({ price, amount, id: data.id });
            dispatch(setProducts({ products }))

            toast.success('Product updated!', {
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
                <p className="text-primary text-[1.5rem] text-center font-bold mb-[1.5rem] leading-[2.25rem]"> {type == 1 ? "Add Product" : "Edit Product"} </p>
                <div className="flex items-center w-full mb-[1rem]">
                    <p className="mr-[10px] min-w-[3rem]"> Name: </p>
                    <select value={locketId} onChange={(e) => { setLocketId(e.target.value) }} className="appearance-none grow mr-[0.875rem] h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" disabled={type == 2}>
                        {lockets.map((t, index) =>
                            <option key={t.id} value={t.id} className="min-h-[2.5rem]"> {t.name} - {getTypeName(getLocket(t.id).type) } </option>
                        )}
                    </select>
                    <p className="leading-[3rem] px-[1rem] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]"> { getTypeName(getLocket(locketId).type) } </p>
                </div>
                <div className="flex items-center w-full mb-[1rem]">
                    <p className="mr-[10px] min-w-[3rem]"> Metal: </p>
                    <select value={c_metalId} onChange={(e) => { setMetalId(e.target.value) }} className="appearance-none w-fit h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" disabled={type == 2}>
                        {metals.map((t, index) =>
                            <option key={index} value={t.id}> {t.name} </option>
                        )}
                    </select>
                    <div className="grow"></div>
                    <p className="mr-[10px] ml-[2rem]"> Color: </p>
                    <select value={c_colorId} onChange={(e) => { setColorId(e.target.value) }} className="appearance-none w-fit h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" disabled={type == 2}>
                        {colors.map((t, index) =>
                            <option key={index} value={t.id}> {t.name} </option>
                        )}
                    </select>
                </div>
                <div className="flex items-center w-full mb-[1rem]">
                    <p className="mr-[10px] min-w-[3rem]"> Price: </p>
                    <input type="number" value={price} onChange={(e) => {
                        setPrice(e.target.value)
                    }} className="grow h-[3rem] max-w-[7rem] px-[10px] mr-[0.875rem] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Price" />
                    <div className="grow"></div>
                    <p className="mr-[10px]"> Amount: </p>
                    <input type="number" value={amount} onChange={(e) => {
                        setAmount(e.target.value)
                    }} className="grow h-[3rem] max-w-[7rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Amount" />
                </div>

                <div className="flex justify-end items-end w-full">
                    <button className="h-[3rem] rounded-full bg-[#d5d5d5] px-[24px] text-white text-[1rem] w-fit mr-[1rem]"
                        onClick={() => {
                            onClose()
                        }}
                    > Cancel </button>
                    <button className="h-[3rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem] w-fit"
                        onClick={() => {
                            type == 1 ? onAddProduct() : onUpdateProduct()
                        }}
                    > {type == 1 ? "Add" : "Save"} </button>
                </div>

            </div>
        </div>
    )
}


import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faAngleDown, faAngleUp, faPlus, faMinus, faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Image from "next/image"
import UTILS_API from "api/Util"
import { useUtil } from "store/hook"
import { useDispatch } from "react-redux"
import { setProducts } from "store/slices/utilSlice"
import { toast } from 'react-toastify';

export default function Item({ index, data, onClick, onClickImages}) {
    const dispatch = useDispatch()
    const { metals, colors, lockets, productTypes } = useUtil()
    const [isVisible, showDetails] = useState(false)
    const [amount, setAmount] = useState(0);

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

    useEffect(() => {
        setAmount(data.amount);
    }, [])

    const onSaveClicked = async(am) => {
        try {
            const products = await UTILS_API.updateProduct({ price: data.price, amount:am, id: data.id });
            dispatch(setProducts({ products }))

            toast.success('Amount updated!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (e) {
            toast.success('Updated failed!', {
                position: "bottom-right",
                autoClose: 5000,
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
            <div className="h-[2.5rem] border-b-[1px] border-b-[#F5F5F5] hover:bg-[#f5f5f5] relative flex items-center" 
                onClick={() => {showDetails(!isVisible)}} style={{ color : amount > 0 ? 'black' : '#00000050'}}>
                <p className="min-w-[2.5rem] text-center"> { index } </p>
                {/* <p className="min-w-[60px] font-bold text-center"> { data.id } </p> */}
                <p className="min-w-[8rem]"> { getLocket(data.locket_id).name } </p>
                <p className="min-w-[6rem] text-center"> { getTypeName(getLocket(data.locket_id).type) } </p>
                <div className="min-w-[6rem] flex items-center justify-center"> 
                    <p className="text-center bg-[#F5F5F5] px-[0.75rem] py-[0.25rem] rounded-full"> { getMetal(data.metal_id).name } </p>
                </div>
                <div className="min-w-[6rem] flex items-center"> 
                    <div className="w-[2rem] h-[2rem] rounded-full overflow-hidden">
                        <Image alt="" width={32} height={32} src={getColor(data.color_id).image ? getColor(data.color_id)?.image : "/images/colors/empty.svg"}/>
                    </div>
                    <p> { getColor(data.color_id).name } </p>
                </div>
                <p className="min-w-[6rem] text-center"> <span className="font-bold">$</span>{ data.price } </p>
                
                <div className="min-w-[6rem] flex items-center justify-center"> 
                    <button className="w-[1.5rem] h-[1.5rem] mr-[0.5rem] bg-primary rounded-full overflow-hidden flex justify-center items-center"
                        onClick={() => {setAmount(amount > 0 ? amount-1: 0)}}
                    >
                        <FontAwesomeSvgIcon width={12} height={12} icon={faMinus} color="white"/>
                    </button>
                    <p className="font-bold text-center"> { amount } </p>
                    <button className="w-[1.5rem] h-[1.5rem] ml-[0.5rem] bg-primary rounded-full overflow-hidden flex justify-center items-center"
                        onClick={() => {setAmount(amount+1)}}
                    >
                        <FontAwesomeSvgIcon width={12} height={12} icon={faPlus} color="white"/>
                    </button>
                </div>
                <button className="min-w-[6rem] flex items-center"
                    onClick={() => {onClickImages()}}
                > 
                    <div className="w-[2rem] h-[2rem] rounded-full flex items-center">
                        <Image alt="" width={32} height={32} src="/images/image.svg"/>
                    </div>
                    <p className="ml-[0.5rem]"> 5 Photos </p>
                </button>
                <div className="grow"></div>
                <div className="flex items-center">
                    <button className="w-[2rem] h-[2rem] mr-[0.5rem] bg-primary disabled:bg-[#D5D5D5] rounded-full overflow-hidden flex justify-center items-center" disabled={amount == data.amount}
                        onClick={() => {onSaveClicked(amount)}}
                    >
                        <FontAwesomeSvgIcon width={16} height={16} icon={faSave} color="white"/>
                    </button>
                    <button className="w-[2rem] h-[2rem] mr-[0.5rem] bg-primary disabled:bg-[#D5D5D5] rounded-full overflow-hidden flex justify-center items-center" disabled={amount != data.amount}
                        onClick={() => {onClick()}}
                    >
                        <FontAwesomeSvgIcon width={16} height={16} icon={faEdit} color="white"/>
                    </button>
                    <button className="w-[2rem] h-[2rem] mr-[0.5rem] bg-primary disabled:bg-[#D5D5D5] rounded-full overflow-hidden flex justify-center items-center" disabled={amount == 0}
                        onClick={() => {onSaveClicked(0)}}
                    >
                        <FontAwesomeSvgIcon width={16} height={16} icon={faTrash} color="white"/>
                    </button>
                </div>  
            </div>
        
    )
}
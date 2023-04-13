import Image from "next/image"
import { useState } from "react"

export default function Item({}) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex border-b-[1px] border-b-[#D4D4D4] mb-[1.5rem]">
            <div className="w-[7.5rem] h-[7.5rem] mb-[1.5rem] mr-[1.5rem]">
                <Image alt="" width={120} height={120} src="/images/jewelry.png"/>
            </div>
            <div className="flex flex-col grow">
                <div className="flex justify-between items-center mb-[0.25rem] text-[1rem] font-bold leading-[1.6875rem] text-[#747067]">
                    <p> Momento® Locket Pearl Flower </p>
                    <p> $300 </p>
                </div>
                <p className="text-[0.875rem] text-[#747067] mb-[0.25rem]"> Metal: Silver </p>
                <p className="text-[0.875rem] text-[#747067] mb-[0.25rem]"> Color: Yellow </p>
                <div className="flex items-center">
                    <p className="text-[#747067] mr-[10px] text-[0.875rem] leading-[1.6875rem]"> Quantity: </p>
                    <button className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#996D01] text-white text-[1.5rem] text-center leading-[1.5rem]"
                        onClick={() => { setQuantity( quantity > 0 ? quantity - 1 : 0)}}
                    > - </button>
                    <p className="text-[#747067] mx-[16px] text-[1.25rem] font-bold"> { quantity } </p>
                    <button className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#996D01] text-white text-[1.5rem] text-center leading-[1.5rem]"
                        onClick={() => { setQuantity(quantity + 1)}}
                    > + </button>
                </div>
            </div>
        </div>
    )
}
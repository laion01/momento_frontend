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
                <p className="text-[#747067] mr-[10px] text-[0.875rem] leading-[1.6875rem]"> Quantity: {quantity} </p>
            </div>
        </div>
    )
}
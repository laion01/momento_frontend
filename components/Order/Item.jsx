import Image from "next/image"
import { useState } from "react"

export default function Item({name, price, metal, color, image, quantity}) {

    return (
        <div className="flex border-b-[1px] border-b-[#D4D4D4] mb-[1.5rem]">
            <div className="w-[7.5rem] h-[7.5rem] mb-[1.5rem] mr-[1.5rem] rounded-[0.5rem] border-[1px] border-[#00000030]">
                <Image alt="" width={120} height={120} src={image.pathname}/>
            </div>
            <div className="flex flex-col grow">
                <div className="flex justify-between items-center mb-[0.25rem] text-[1rem] font-bold leading-[1.6875rem] text-[#747067]">
                    <p> {name} </p>
                    <p> ${price} </p>
                </div>
                <p className="text-[0.875rem] text-[#747067] mb-[0.25rem] mt-[0.5rem]"> Metal: <span className="font-bold text-[1rem]">{metal}</span> </p>
                <p className="text-[0.875rem] text-[#747067] mb-[0.25rem]"> Color:  <span className="font-bold text-[1rem]">{color}</span> </p>
                <p className="text-[0.875rem] text-[#747067] mb-[0.25rem]"> Quantity: <span className="font-bold text-[1rem]">{quantity}</span> </p>
            </div>
        </div>
    )
}
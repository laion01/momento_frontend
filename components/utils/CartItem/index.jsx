import Image from "next/image"
import { useState } from "react"

const colors = [
    {}, { 
        image: "/images/colors/color_1.svg",
        name: "Yellow",
    }, { 
        image: "/images/colors/color_2.svg",
        name: "Yellow",
    }, { 
        image: "/images/colors/color_3.svg",
        name: "Yellow",
    }, { 
        image: "/images/colors/color_4.svg",
        name: "Yellow Gold",
    }, { 
        image: "/images/colors/color_5.svg",
        name: "Yellow Gold",
    }, { 
        image: "/images/colors/color_6.svg",
        name: "Yellow Gold",
    }, {}, {}, {}, {}
    , { 
        image: "/images/colors/color_11.svg",
        name: "Yellow Gold",
    }, { 
        image: "/images/colors/color_12.svg",
        name: "Yellow Gold",
    }, { 
        image: "/images/colors/color_13.svg",
        name: "Yellow Gold",
    }, { 
        image: "/images/colors/color_14.svg",
        name: "Yellow Gold",
    }, { 
        image: "/images/colors/color_15.svg",
        name: "Yellow Gold",
    }, { 
        image: "/images/colors/color_16.svg",
        name: "Yellow Gold",
    }, {}, {}, {}
]

const metals = [
    "Silver", "Yellow Gold", "White Gold"
]

export default function CartItem({ data }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex border-b-[1px] border-b-[#D4D4D4] mb-[1.5rem]">
            <div className="w-[7.5rem] h-[7.5rem] mb-[1.5rem] mr-[1.5rem]">
                <Image alt="" width={120} height={120} src={data.image}/>
            </div>
            <div className="flex flex-col grow">
                <div className="flex justify-between items-center mb-[0.25rem] text-[1rem] font-bold leading-[1.6875rem] text-[#747067]">
                    <p> { data.name } </p>
                    <p> $ {data.price} </p>
                </div>
                <p className="text-[0.875rem] text-[#747067] mb-[0.25rem]"> Metal: { metals[data.metal] } </p>
                <p className="text-[0.875rem] text-[#747067] mb-[0.25rem]"> Color: { colors[data.color].name } </p>
                <p className="text-[#747067] mr-[10px] text-[0.875rem] leading-[1.6875rem]"> Quantity: {quantity} </p>
            </div>
        </div>
    )
}
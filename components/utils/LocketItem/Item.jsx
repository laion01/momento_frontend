import Image from "next/image"
import { useState } from "react"

const colors = [
    {}, { 
        image: "/images/colors/color_1.svg",
        name: "",
    }, { 
        image: "/images/colors/color_2.svg",
        name: "",
    }, { 
        image: "/images/colors/color_3.svg",
        name: "",
    }, { 
        image: "/images/colors/color_4.svg",
        name: "",
    }, { 
        image: "/images/colors/color_5.svg",
        name: "",
    }, { 
        image: "/images/colors/color_6.svg",
        name: "",
    }, {}, {}, {}, {}
    , { 
        image: "/images/colors/color_11.svg",
        name: "",
    }, { 
        image: "/images/colors/color_12.svg",
        name: "",
    }, { 
        image: "/images/colors/color_13.svg",
        name: "",
    }, { 
        image: "/images/colors/color_14.svg",
        name: "",
    }, { 
        image: "/images/colors/color_15.svg",
        name: "",
    }, { 
        image: "/images/colors/color_16.svg",
        name: "",
    }, {}, {}, {}
]

export default function LocketItem({image, title, context, price, categories, colorItems, selectedCat, selectedColor}) {
    return (
        <div className="w-[436px] h-[569px] p-[20px] m-[10px] bg-white padding-[16px] flex flex-col justify-start items-center shadow">
            <div className="w-full h-full flex flex-col justify-start items-center bg-[#f5f5f5]">
                <div className="mb-[5px] -mt-[20px] flex flex-col">
                    <Image alt="" src={image} width={207} height={257}/>
                </div>
                <h5 className="text-[1rem] leading-[1.6875rem] text-[#747067] font-bold text-center"> { title } </h5>
                <p className="text-[1.125rem] leading-[1.5rem] text-[#747067] mb-[24px] text-center"> $ { price } </p>
                <div className="flex justify-center items-center mb-[24px]">
                    { categories.map((cat, index) => 
                    <button key={index} className="rounded-full text-[#747067] text-center leading-[1.3125rem] mx-[4px] px-[12px] border-[#747067] h-[33px]" style={{borderWidth: index==selectedCat ? 2 : 0, backgroundColor: index==selectedCat ? "transparent" : "#74706708"}}>
                        { cat }
                    </button>
                    )}
                </div>
                <p className="text-[0.875rem] leading-[1.5rem] text-[#747067]"> { context } </p>
                <div className="flex justify-center items-center mb-[24px]">
                    { colorItems.map((colorIndex, index) => 
                        // <button key={colorIndex} className="rounded-full mx-[8px] p-[2px] border-[#747067] flex justify-center items-center" style={{borderWidth: colorIndex==selectedColor ? 2 : 0}}>
                            <div key={colorIndex} className="rounded-full pt-[3px] w-[2.5rem] h-[2.5rem] flex justify-center items-center border-[#747067]" style={{borderWidth: colorIndex==selectedColor ? 2 : 0}}>
                                <Image alt={colors[colorIndex].name} src={colors[colorIndex].image} width={32} height={32} />
                            </div>
                        // </button>
                    )}
                </div>
                <button className="h-[3rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem]"> Add to Bag </button>
            </div>
        </div>
    )
}
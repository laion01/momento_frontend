import Image from "next/image"
import { useRouter } from "next/router";
import { useState } from "react"
import Button from "../Buttons/Button";

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

export default function LocketItem({image, title, context, price, categories, colorItems}) {
    const router = useRouter();
    const [selectedColor, selectColor] = useState(1);
    const [selectedMetal, selectMetal] = useState(1);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="w-[436px] h-[569px] m-[0.625rem] bg-white padding-[16px] flex flex-col justify-start items-center shadow hover:shadow-md cursor-pointer"
            onClick={() => { router.push({pathname: "/locket"})}}
        >
            <div className="w-[calc(100%-2.5rem)] hover:w-[calc(100%-1.25rem)] hover:pt-[0.5rem] h-full flex flex-col m-[1.25rem] hover:m-[0.75rem] justify-start items-center bg-[#f5f5f5] transition-all duration-500">
                <div className="mb-[5px] -mt-[20px] flex flex-col">
                    <Image alt="" src={image} width={207} height={257}/>
                </div>
                <h5 className="text-[1rem] leading-[1.6875rem] text-[#747067] font-bold text-center"> { title } </h5>
                <p className="text-[1.125rem] leading-[1.5rem] text-[#747067] mb-[24px] text-center"> $ { price } </p>
                <div className="flex justify-center items-center mb-[24px]">
                    { categories.map((cat, index) => 
                    <button key={index} className="rounded-full text-[#747067] text-center leading-[1.3125rem] mx-[4px] px-[12px] border-[#747067] h-[33px]" style={{borderWidth: index==selectedMetal ? 2 : 0, backgroundColor: index==selectedMetal ? "transparent" : "#74706708"}}
                        onClick={(e) => { selectMetal(index), e.stopPropagation() }}
                    >
                        { cat }
                    </button>
                    )}
                </div>
                <p className="text-[0.875rem] leading-[1.5rem] text-[#747067]"> { context } </p>
                <div className="flex justify-center items-center mb-[24px]">
                    { colorItems.map((colorIndex, index) => 
                        // <button key={colorIndex} className="rounded-full mx-[8px] p-[2px] border-[#747067] flex justify-center items-center" style={{borderWidth: colorIndex==selectedColor ? 2 : 0}}>
                            <button key={index} className="rounded-full pt-[3px] w-[2.5rem] h-[2.5rem] flex justify-center items-center border-[#747067]" style={{borderWidth: index == selectedColor ? 2 : 0}}
                                onClick={(e) => { selectColor(index), e.stopPropagation() }}
                            >
                                <Image alt={colors[colorIndex].name} src={colors[colorIndex].image} width={32} height={32} />
                            </button>
                        // </button>
                    )}
                </div>
                <Button label="Add to Bag" onClick={(e) => {alert("123"), e.stopPropagation()}} />
            </div>
        </div>
    )
}
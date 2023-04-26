import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Image from "next/image"
import { useUtil } from "store/hook"

export default function Item({ index, data}) {
    const { metals, colors } = useUtil()
    const [isVisible, showDetails] = useState(false)

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

    return (
        <div className="flex flex-col">
            <div className="h-[2.5rem] border-b-[1px] border-b-[#F5F5F5] hover:bg-[#f5f5f5] relative flex items-center" onClick={() => {showDetails(!isVisible)}}>
                <p className="min-w-[2.5rem] text-center"> { index } </p>
                <p className="min-w-[60px] font-bold text-center"> { data.id } </p>
                <p className="grow"> { data.name } </p>
                <p className="min-w-[100px] font-bold text-center"> { data.amount } </p>
            </div>
            { isVisible && 
                <div className="">
                    { data.products.map((product, itemIndex) => 
                        <div key={itemIndex} className="h-[2rem] border-b-[1px] border-b-[#F5F5F5] relative flex items-center pl-[5rem]">
                            <p className="min-w-[100px]"> metal: <span className="font-semibold text-[0.75rem]"> { getMetal(product.metal_id).name } </span></p>
                            <div className="min-w-[100px] flex items-center">  
                                <div className="w-[1.5rem] h-[1.5rem]">
                                    <Image alt="" width={24} height={24} src={getColor(product.color_id).image}/>
                                </div>
                                <span className="font-semibold text-[0.75rem]"> { getColor(product.color_id).name }  </span>
                            </div>
                            <p className="min-w-[100px]"> Price : <span className="font-semibold text-[0.75rem]"> ${ product.price } </span> </p>
                            <p className="min-w-[160px]"> Amount : <span className="font-semibold text-[0.75rem]"> { product.amount } </span> </p>
                            {/* <p className="min-w-[120px]"> Quanity: <span className="font-semibold text-[0.75rem]"> {product.quantity}  </span></p> */}
                        </div>
                    )}
                </div>
            }
        </div>
        
    )
}
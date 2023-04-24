import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import Image from "next/image"

export default function Item({ index, data}) {
    const [isVisible, showDetails] = useState(false)
    return (
        <div className="flex flex-col">
            <div className="border-b-[1px] border-b-[#F5F5F5] hover:bg-[#f5f5f5] relative flex items-center w-fit">
                <p className="min-w-[2.5rem] text-center"> { index } </p>
                <p className="min-w-[80px] flex items-center font-bold">
                    {data.id}
                </p>
                <p className="min-w-[160px] flex items-center">
                    {data.username}
                </p>
                <div className="h-[2.5rem] min-w-[200px] flex items-center"> 
                    <button className="h-[2rem] bg-[#F5F5F5] rounded-[0.5rem] w-fit px-[0.5rem] mr-[0.5rem]"> {data.products[0].name} </button>
                    <div className="grow"></div>
                    { data.products.length > 0 && 
                        <button className="h-[2rem] bg-[#F5F5F5] rounded-[0.5rem] w-fit px-[0.5rem]" onClick={() => {showDetails(!isVisible)}}> 
                            <FontAwesomeSvgIcon icon={ isVisible ? faAngleUp : faAngleDown} width={12} height={12} />
                        </button>
                    }
                </div>
                <p className="min-w-[100px] text-center text-[0.75rem] font-semibold"> ${ data.subTotal } </p>
                <p className="min-w-[80px] text-center text-[0.75rem] font-semibold"> ${ data.promotion } </p>
                <p className="min-w-[100px] text-center text-[0.75rem] font-semibold"> ${ data.tax } </p>
                <p className="min-w-[120px] text-center text-[0.75rem] font-semibold"> ${ data.total } </p>
                <p className="min-w-[120px] text-center"> 
                    #636203030
                </p>
                <p className="min-w-[400px] grow">
                    351 Markham Street, Toronto On Canada
                </p>
                <div className="h-[2.5rem] min-w-[100px] flex items-center justify-center"> 
                    <button className="h-[2rem] bg-[#F5F5F5] rounded-[0.5rem] w-fit px-[0.5rem]"> { data.status == 0 ? "SUCCESS" : data.status == 1 ? "in Progress" : "Pending"} </button>
                </div>
            </div>
            { isVisible && 
                <div className="bg-[#d5d5d5]    ">
                    { data.products.map((product, itemIndex) => 
                        <div key={itemIndex} className="border-b-[1px] border-b-[#F5F5F5] relative flex items-center">
                            <div className="ml-[190px] min-w-[90px]  pr-[0.5rem] flex justify-end">
                                <div className="bg-white w-[2rem] h-[2rem]">
                                    <Image alt="" src={product.image} width={32} height={32}/>
                                </div>
                            </div>
                            <div className="h-[2.5rem] min-w-[156px] flex items-center"> 
                                <p className="w-fit px-[0.5rem] mr-[0.5rem]"> {product.name} </p>
                            </div>
                            <p className="min-w-[100px]"> metal: <span className="font-semibold text-[0.75rem]"> {product.metal} </span></p>
                            <p className="min-w-[100px]">  color: <span className="font-semibold text-[0.75rem]"> {product.color}  </span></p>
                            <p className="min-w-[100px]"> Price : <span className="font-semibold text-[0.75rem]">${ product.price}</span> </p>
                            <p className="min-w-[160px]"> Total Price : <span className="font-semibold text-[0.75rem]">${ product.totalPrice}</span> </p>
                            <p className="min-w-[120px]"> Quanity: <span className="font-semibold text-[0.75rem]"> {product.quantity}  </span></p>
                        </div>
                    )}
                </div>
            }
        </div>
        
    )
}
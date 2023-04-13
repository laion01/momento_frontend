import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import CartItem from "../CartItem";
import { useState } from "react";

export default function OrderItem({ data }) {
    const [isOpen, openOrder] = useState(false)

    return (
        <div className="bg-white flex flex-col p-[1.5rem] h-fit mx-[50px] mb-[2rem] shadow min-w-[540px] rounded-[0.5rem]">
            <button className="flex justify-between items-center mb-[1.5rem]"
                onClick={() => { openOrder(!isOpen) }}
            >
                <p className="text-primary font-bold text-[1.125rem]"> Order #{data.id} ({data.items.length} items) </p>
                <FontAwesomeSvgIcon icon={ !isOpen ? faAngleDown : faAngleUp } width={20} height={20} className="text-[#747067]" />
            </button>
            <p className="text-[0.875rem] text-[#747067] leading-[1.3125rem] mb-[0.5rem]"> Placed on {data.created} </p>
            <p className="text-[0.875rem] text-[#747067] leading-[1.3125rem]"> Deliver to: {data.address} </p>

            { isOpen &&
                <>
                    <div className="flex flex-col mt-[1.5rem] pt-[1.5rem] border-t-[1px] border-[#D4D4D4]">
                        { data.items.map((cart, index) => 
                            <CartItem key={index} data={cart}/> 
                        )}
                    </div>
                    <div className="flex justify-between text-[0.875rem] text-[#747067] mb-[0.5rem] leading-[1.3125rem]">
                        <p> Subtotal </p>
                        <p className="font-bold"> $ 600.00 </p>
                    </div>
                    <div className="flex justify-between text-[0.875rem] text-[#747067] mb-[0.5rem] leading-[1.3125rem]">
                        <p> Shipping </p>
                        <p className="font-bold"> $ 5.00 </p>
                    </div>
                    <div className="flex justify-between text-[0.875rem] text-[#747067] mb-[0.5rem] leading-[1.3125rem]">
                        <p> Promotion Applied (1) </p>
                        <p className="font-bold"> -$ 30.00 </p>
                    </div>
                    <div className="flex justify-between text-[0.875rem] text-[#747067] mb-[0.5rem] leading-[1.3125rem]">
                        <p> Estimated tax </p>
                        <p className="font-bold"> $ 40.25 </p>
                    </div>
                    <div className="flex justify-between items-center mb-[0.25rem] text-[1.125rem] font-bold leading-[1.6875rem] text-[#747067] mt-[1.5rem] border-t-[1px] border-b-[#D4D4D4] pt-[1.5rem]">
                        <p> Total </p>
                        <p> $600 </p>
                    </div>
                </>
            }
            
        </div>
    )
}
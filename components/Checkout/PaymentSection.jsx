import Image from "next/image";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { useState } from "react";

export default function PaymentSection({}) {
    const [billingAddrOption, setBillingAddrOption] = useState(1);

    const onOptionchaged = (val) => {
        setBillingAddrOption(val)
    }

    return (
        <div className="w-full flex flex-col">
            <div className="bg-white flex flex-col p-[1.5rem] rounded-[0.5rem] shadow mb-[2rem]">
                <div className="flex items-center mb-[0.5rem]">
                    <p className="text-[1.5rem] font-bold leading-[2.25rem] text-[#996D01] grow">
                        Shipping Address
                    </p>
                    <button className="flex items-center">
                        <FontAwesomeSvgIcon icon={faEdit} width={16} height={16} color="#747067"/>
                        <p className="text-[#747067] text-[1rem] ml-[0.5rem]"> Edit </p>
                    </button>
                </div>
                <p className="text-[1rem] text-[#747067] leading-[1.6875rem] mb-[0.5rem]">
                    Customer Name <br/>
                    Address St, City, FL 33327
                </p>
                <p className="text-[1.125rem] text-[#747067] font-bold leading-[2.25rem]">
                    Delivery date: June 23, 2021
                </p>
            </div>
            <div className="bg-white flex flex-col p-[1.5rem] rounded-[0.5rem] shadow mb-[2rem]">
                <div className="flex items-center mb-[1.5rem]">
                    <p className="text-[1.5rem] font-bold leading-[2.25rem] text-[#996D01] grow">
                        Payment Method
                    </p>
                    <button className="flex items-center mr-[0.5rem] w-[2rem] h-[1.5rem] ">
                        <Image alt="" src="/images/visa.svg" width={32} height={24}/>
                    </button>
                    <button className="flex items-center mr-[0.5rem] w-[2rem] h-[1.5rem] ">
                        <Image alt="" src="/images/mastercard.svg" width={32} height={24}/>
                    </button>
                    <button className="flex items-center mr-[0.5rem] w-[2rem] h-[1.5rem] ">
                        <Image alt="" src="/images/amex.svg" width={32} height={24}/>
                    </button>
                    <button className="flex items-center mr-[0.5rem] w-[2rem] h-[1.5rem] ">
                        <Image alt="" src="/images/discover.svg" width={32} height={24}/>
                    </button>
                </div>
                <div className="flex mb-[1.5rem]">
                    <div className="w-1/2 flex h-[3rem] items-center mr-[0.75rem] px-[0.625rem] border-[1px] border-[#D4D4D4] rounded-[0.25rem]">
                        <div className="w-[32px] h-[24px] mr-[0.625rem]">
                            <Image src="/images/cardicon.svg" alt="" width={32} height={24}/>
                        </div>
                        <input type="text" className="text-[1rem] leading-[1.6875rem] outline-none" placeholder="Card Number"/>
                    </div>
                    <div className="w-1/2 flex h-[3rem] items-center grow ml-[0.75rem] px-[0.625rem] border-[1px] border-[#D4D4D4] rounded-[0.25rem]">
                        <input type="text" className="grow text-[1rem] leading-[1.6875rem] outline-none" placeholder="Name on Card"/>
                    </div>
                </div>
                <div className="flex mb-[3.375rem]">
                    <div className="w-1/2 flex h-[3rem] items-center mr-[0.75rem] px-[0.625rem] border-[1px] border-[#D4D4D4] rounded-[0.25rem]">
                        <input type="text" className="grow text-[1rem] leading-[1.6875rem] outline-none" placeholder="Expiration Date (MM/YY)"/>
                    </div>
                    <div className="w-1/2 flex h-[3rem] items-center grow ml-[0.75rem] px-[0.625rem] border-[1px] border-[#D4D4D4] rounded-[0.25rem]">
                        <input type="text" className="grow text-[1rem] leading-[1.6875rem] outline-none" placeholder="Security Code"/>
                    </div>
                </div>

                <div className="flex flex-col mb-[1.5rem]">
                    <p className="text-[1.5rem] font-bold leading-[2.25rem] text-[#996D01]">
                        Billing Address
                    </p>
                    <p className="text-[0.875rem] leading-[1.3125rem] text-[#747067]">
                        Select the address that matches your card or payment method.
                    </p>
                </div>

                <div className="flex flex-col">
                    <button className="flex items-center h-[3rem]" onClick={() => {onOptionchaged(1)}}>
                        <div className="rounded-full min-w-[1.25rem] h-[1.25rem] mr-[1rem] border-[#996D01]" style={{ borderWidth : billingAddrOption == 1 ? "5px" : "1px", opacity: billingAddrOption == 1 ? "1.0" : "0.2"}}></div>
                        <p className="text-[1rem] text-[#747067] leading-[1.6875rem]"> Same as shipping address </p>
                    </button>
                    <button className="flex items-center h-[3rem]" onClick={() => {onOptionchaged(2)}}>
                        <div className="rounded-full min-w-[1.25rem] h-[1.25rem] mr-[1rem] border-[#996D01]" style={{ borderWidth : billingAddrOption == 2 ? "5px" : "1px", opacity: billingAddrOption == 2 ? "1.0" : "0.2"}}></div>
                        <p className="text-[1rem] text-[#747067] leading-[1.6875rem]"> Use a different billing address </p>
                    </button>
                </div>
            </div>

            <div className="w-full flex justify-between items-center">
                <button className="w-[14.25rem] h-[2.75rem]">
                    <Image alt="" src="/images/PaypalButton.png" width={228} height={44} />
                </button>
                <button className="h-[3rem] rounded-full bg-[#996D01] disabled:bg-[#BCB9B3] px-[24px] text-white text-[1rem]"
                > Continue to Payment </button>
            </div>
        </div>
    )
}
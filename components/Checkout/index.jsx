import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import UploadFileDlg from "components/utils/UploadFileDlg";
import Item from "components/ShoppingCart/Item";
import PaymentSection from "./PaymentSection";

export default function Checkout() {
    const [isOpenDlg, openDlg] = useState(false);
    const [pageNum, setPageNum] = useState(1);

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container grow flex flex-col justify-center items-center relative pb-[8rem]">
                <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[6.75rem] text-[#AC8118] text-center mt-[100px] mb-[3rem]">
                    Checkout
                </h2>
                <div className="flex mb-[3rem]">
                    <button className="flex flex-col mr-[32px]">
                        <div className="w-full flex rounded-full h-[0.5rem] mb-[0.5rem]" style={{ backgroundColor: pageNum == 1 ? "#996D01" : "#74706726"}}></div>
                        <p className="text-[0.875rem] font-bold" style={{ color: pageNum == 1 ? "#996D01" : "#747067"}}> 1. Shipping </p>
                    </button>
                    <button className="flex flex-col">
                        <div className="w-full flex rounded-full h-[0.5rem] mb-[0.5rem]" style={{ backgroundColor: pageNum == 2 ? "#996D01" : "#74706726"}}></div>
                        <p className="text-[0.875rem] font-bold" style={{ color: pageNum == 2 ? "#996D01" : "#747067"}}> 2. Payment </p>
                    </button>
                </div>
                <div className="w-full flex mr-[2rem]">
                    <div className="flex flex-col min-w-[540px] mx-[50px] ">
                        <div className="bg-white flex flex-col p-[1.5rem] h-fit mb-[2rem] rounded-[0.5rem] shadow">
                            <div className="flex justify-between items-center mb-[1.5rem] pb-[1.5rem] border-b-[1px] border-b-[#D4D4D4]">
                                <p className="text-[#996D01] text-[1.125rem] ml-[10px]"> My Bag (2 items) </p>
                                <button className="text-[#747067] flex justify-center items-center" onClick={() => {onClose(false)}}>
                                    <FontAwesomeSvgIcon icon={faAngleDown} width={20} height={20} className="text-[#747067]" />
                                </button>
                            </div>
                            <div className="flex flex-col">
                                <Item />
                                <Item />
                                <Item />
                            </div>
                            <div className="flex justify-between items-center mb-[4px] text-[1rem] font-bold leading-[1.6875rem] text-[#747067]">
                                <p> Total </p>
                                <p> $600 </p>
                            </div>
                        </div>
                    </div>
                    { pageNum == 1 ?
                        <div className="flex flex-col grow">
                            <div className="bg-white flex flex-col px-[1.5rem] p-[24px] h-fit mb-[2rem] rounded-[0.5rem] shadow">
                                <p className="text-[1.5rem] text-[#996D01] font-bold mb-[2rem]"> Shipping Address </p>
                                <div className="flex mb-[1.5rem]">
                                    <div className="grow pr-[0.75rem]">
                                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="First Name"/>
                                    </div>
                                    <div className="grow pl-[0.75rem]">
                                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className="flex mb-[1.5rem]">
                                    <div className="grow pr-[0.75rem]">
                                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Email"/>
                                    </div>
                                    <div className="grow pl-[0.75rem]">
                                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Phone"/>
                                    </div>
                                </div>
                                <div className="flex mb-[1.5rem]">
                                    <div className="grow pr-[0.75rem]">
                                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Address"/>
                                    </div>
                                    <div className="grow pl-[0.75rem]">
                                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Apartment"/>
                                    </div>
                                </div>
                                <div className="flex mb-[1.5rem]">
                                    <div className="grow pr-[0.75rem]">
                                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="City"/>
                                    </div>
                                    <div className="grow pl-[0.75rem]">
                                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="First Name"/>
                                    </div>
                                </div>
                                <div className="flex mb-[1.5rem]">
                                    <div className="grow pr-[0.75rem]">
                                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="First Name"/>
                                    </div>
                                    <div className="grow pl-[0.75rem]">
                                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="First Name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button className="h-[3rem] rounded-full bg-[#996D01] disabled:bg-[#BCB9B3] px-[24px] text-white text-[1rem]"
                                    onClick={() => {setPageNum(2)}}
                                > Continue to Payment </button>
                            </div>
                        </div> : 
                        <div className="flex flex-col grow">
                            <PaymentSection />
                        </div>
                    }
                </div>
            </div>
            { isOpenDlg &&
                <UploadFileDlg onClose={openDlg}/>
            }
        </div>
    )
}


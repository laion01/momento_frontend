import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image";
import { useState } from "react";
import UploadFileDlg from "components/utils/UploadFileDlg";
import Item from "./Item";



export default function Order() {

    const [isOpenDlg, openDlg] = useState(false);

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container grow flex flex-col justify-center items-center relative pb-[8rem]">
                <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] leading-[3.75rem] text-[#AC8118] text-center font-bold mt-[100px] mb-[2.5rem]">
                    Order placed, thanks!
                </h2>
                <p className="text-[1.125rem] font-light leading-[2.25rem] text-[#747067] mb-[2.5rem]"> Confirmation will be sent to your email. </p>
                <p className="text-[1.125rem] font-bold leading-[2.25rem] text-[#747067] mb-[2.5rem] text-center"> 
                    Shipping to Customer Name, 0000 Address St, City, FL 33327 <br/>
                    Estimated delivery: June 23, 2021 
                </p>
                <div className="bg-white flex justify-between p-[1.25rem] mb-[2rem] shadow min-w-[540px] mb-[2.5rem] rounded-[0.5rem]">
                    <p className="text-[1rem] text-[#747067] text-center grow"> <span className="font-bold"> Order Number: </span> #156729347 </p>
                    <div className="w-[1px] bg-[#747067] h-full"></div>
                    <p className="text-[1rem] text-[#747067] text-center grow"><span className="font-bold"> Order Date: </span> 06/10/2021 </p>

                </div>
                <div className="bg-white flex flex-col p-[1.5rem] h-fit mx-[50px] mb-[2rem] shadow-md min-w-[540px]">
                    <div className="flex justify-between items-center mb-[1.5rem] pb-[1.5rem] border-b-[1px] border-b-[#D4D4D4]">
                        <p className="text-primary font-bold text-[1.125rem] ml-[10px]"> Your order Summary (2 items) </p>
                        <button className="text-[#747067] flex justify-center items-center" onClick={() => {onClose(false)}}>
                            <FontAwesomeSvgIcon icon={faAngleDown} width={20} height={20} className="text-[#747067]" />
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <Item />
                        <Item />
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
                </div>
            </div>
            { isOpenDlg &&
                <UploadFileDlg onClose={openDlg}/>
            }
        </div>
    )
}


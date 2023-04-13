import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image";
import { useState } from "react";
import UploadFileDlg from "components/utils/UploadFileDlg";
import Item from "./Item";



export default function ShoppingCart() {
    const [isOpenDlg, openDlg] = useState(false);

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container grow flex flex-col justify-center items-center relative pb-[8rem]">
                <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[6.75rem] text-[#AC8118] text-center mt-[100px] mb-[3rem]">
                    Shopping Cart
                </h2>
                <div className="bg-white flex flex-col p-[1.5rem] h-fit mx-[50px] mb-[2rem] shadow-md min-w-[540px]">
                    <div className="flex justify-between items-center mb-[1.5rem] pb-[1.5rem] border-b-[1px] border-b-[#D4D4D4]">
                        <p className="text-primary text-[1.125rem] font-bold ml-[10px]"> My Bag (2 items) </p>
                        <button className="text-[#747067] flex justify-center items-center" onClick={() => {onClose(false)}}>
                            <FontAwesomeSvgIcon icon={faAngleDown} width={20} height={20} className="text-[#747067]" />
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <Item />
                        <Item />
                        <Item />
                    </div>
                    <div className="flex justify-between items-center mb-[0.25rem] text-[1rem] font-bold leading-[1.6875rem] text-[#747067]">
                        <p> Total </p>
                        <p> $600 </p>
                    </div>
                </div>
                <button className="h-[3rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem]"> Proceed to Checkout </button>
            </div>
            { isOpenDlg &&
                <UploadFileDlg onClose={openDlg}/>
            }
        </div>
    )
}


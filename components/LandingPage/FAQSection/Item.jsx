import { useState } from "react"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Item({title, context}) {
    const [isOpen, open] = useState(false);

    return (
        <div className="grow w-full max-w-[100%] md:max-w-[50%] px-[16px] mb-[1.25rem] cursor-pointer" onClick={() => {open(!isOpen)}}>
            <div className="border-b-[1px] border-b-[#747067] pb-[20px] transition-all duration-300 flex-flex-col">
                <div className="flex items-center" style={{ marginBottom: isOpen? "0.5rem" : "0rem" }}>
                    <div className="w-[20px] h-[20px] bg-[#996D01] rounded-full mr-[10px] flex justify-center items-center">
                        <FontAwesomeSvgIcon icon={faPlus} width={8} height={8} color="white"/>
                    </div>
                    <p className="text-[#747067] text-[1rem] font-bold"> { title } </p>
                    
                </div>
                { isOpen &&
                    <p className="text-[#747067] leading-[1.6875rem]"> { context } </p>
                }
            </div>
        </div>
    )
}
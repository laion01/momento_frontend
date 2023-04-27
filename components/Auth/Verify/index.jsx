import { useState } from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Verify() {
    const [email, setEmail] = useState({
        value: '', error: ''
    });
    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex flex-col items-center pt-[8rem] pb-[3rem] min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-4.5rem)]">
            <div className="bg-white flex flex-col items-center p-[1.5rem] h-fit mx-[50px] mb-[2rem] shadow-md w-[calc(100%-40px)] md:w-[450px] mb-[2rem] rounded-[0.5rem]">
                <p className="text-primary text-[1.5rem] text-center font-bold mb-[2rem] leading-[2.25rem]"> Verify your email </p>
                <p className="text-[#747067] text-[1rem] text-center mb-[1.5rem] leading-[1.6875rem]"> Please enter the 4 digit code sent to email@example.com </p>

                <div className="flex justify-center items-center mb-[1.5rem]">
                    <input type="text" className="mx-[0.5rem] w-[4rem] h-[4rem] text-[1.5rem] font-bold text-center outline-none border-[1px] border-[#D4D4D4] rounded-[0.5rem]" maxLength={1}/>
                    <input type="text" className="mx-[0.5rem] w-[4rem] h-[4rem] text-[1.5rem] font-bold text-center outline-none border-[1px] border-[#D4D4D4] rounded-[0.5rem]" maxLength={1}/>
                    <input type="text" className="mx-[0.5rem] w-[4rem] h-[4rem] text-[1.5rem] font-bold text-center outline-none border-[1px] border-[#D4D4D4] rounded-[0.5rem]" maxLength={1}/>
                    <input type="text" className="mx-[0.5rem] w-[4rem] h-[4rem] text-[1.5rem] font-bold text-center outline-none border-[1px] border-[#D4D4D4] rounded-[0.5rem]" maxLength={1}/>
                </div>
                <button className="h-[3rem] rounded-full bg-[#996D01] px-[1.5rem] text-white text-[1rem] mb-[1.5rem] w-fit"> Verify </button>
                
                <div className="flex items-center">
                    <Link href="/auth/signin">
                        <a target="_self"
                            className="border-b-[2px] border-[#996D01] text-[#747067] text-[0.875rem] leading-[1.6875rem] w-fit font-bold">
                            Resend code
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}


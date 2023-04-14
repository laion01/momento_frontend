import { useState } from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Signin() {
    const [isPassword, showPassword] = useState(true);

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex flex-col items-center pt-[8rem] pb-[3rem] min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-4.5rem)]">
            <div className="bg-white flex flex-col items-center p-[1.5rem] h-fit mx-[50px] mb-[2rem] shadow-md w-[calc(100%-40px)] md:w-[450px] mb-[2rem] rounded-[0.5rem]">
                <p className="text-primary text-[1.5rem] text-center font-bold mb-[1.5rem] leading-[2.25rem]"> Sign-In </p>
                <input type="email" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px] mb-[1rem]" placeholder="Email"/>
                <div className="w-full flex items-center h-[3rem] px-[10px] border-[1px] border-[#D4D4D4] rounded-[4px] mb-[24px]">
                    <input type={isPassword ? "password" : "text"} className="grow text-[1rem] outline-none" placeholder="Password"/>
                    <button onClick={() => { showPassword(!isPassword) }}>
                        <FontAwesomeSvgIcon width={24} height={24} icon={ isPassword ? faEye : faEyeSlash} color="#747067"/>
                    </button>
                </div>
                <button className="h-[3rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem] mb-[1rem] w-fit"> Sign in </button>
                <Link href="/auth/forgot">
                <a target="_self"
                    className="border-b-[2px] border-[#996D01] text-primary text-[0.875rem] leading-[1.125rem] w-fit font-bold">
                    Forgot Password
                </a>
            </Link>
            </div>
            <Link href="/auth/signup">
                <a target="_self"
                    className="border-b-[2px] border-[#996D01] text-primary text-[0.875rem] leading-[1.125rem] w-fit font-bold">
                    Create a new account
                </a>
            </Link>
        </div>
    )
}


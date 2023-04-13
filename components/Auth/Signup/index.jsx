import { useState } from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Signup() {
    const [name, setName] = useState({
        value: '', error: ''
    });
    const [email, setEmail] = useState({
        value: '', error: ''
    });
    const [password, setPassword] = useState({
        value: '', error: ''
    });
    const [repeat, setRepeat] = useState({
        value: '', error: ''
    });
    const [isPassword, showPassword] = useState(true);
    const [isAcceptTerms, acceptTerms] = useState(false);

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex flex-col items-center pt-[8rem] pb-[3rem] min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-9rem)]">
            <div className="bg-white flex flex-col items-center p-[1.5rem] h-fit mx-[50px] mb-[2rem] shadow-md w-[calc(100%-40px)] md:w-[450px] mb-[2rem] rounded-[0.5rem]">
                <p className="text-primary text-[1.5rem] text-center font-bold mb-[1.5rem] leading-[2.25rem]"> Create account </p>
                <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px] mb-[1rem]" placeholder="Name"/>
                <input type="email" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px] mb-[1rem]" placeholder="Email"/>
                <div className="w-full flex items-center h-[3rem] px-[10px] border-[1px] border-[#D4D4D4] rounded-[4px] mb-[1.5rem]">
                    <input type={isPassword ? "password" : "text"} className="grow text-[1rem] outline-none" placeholder="Password"/>
                    <button onClick={() => { showPassword(!isPassword) }}>
                        <FontAwesomeSvgIcon width={24} height={24} icon={ isPassword ? faEye : faEyeSlash} color="#747067"/>
                    </button>
                </div>
                <div className="w-full flex items-center h-[3rem] px-[10px] border-[1px] border-[#D4D4D4] rounded-[4px] mb-[1.5rem]">
                    <input type={isPassword ? "password" : "text"} className="grow text-[1rem] outline-none" placeholder="Confirm password"/>
                    <button onClick={() => { showPassword(!isPassword) }}>
                        <FontAwesomeSvgIcon width={24} height={24} icon={ isPassword ? faEye : faEyeSlash} color="#747067"/>
                    </button>
                </div>
                <div className="w-full flex px-[10px] rounded-[4px] mb-[1.5rem] text-[#747067]">
                    <input type="checkbox" value={isAcceptTerms} onChange={(e) => { acceptTerms(e.target.value) }} className="outline-none h-[2rem] w-[2rem] rounded-[0.25rem] mr-[0.875rem] accent-primary"/>
                    <p className="leading-[2rem]">I agree to the </p>
                    <button className="leading-[1rem] ml-[0.5rem] border-b-[1px] border-[#747067]"> Galatea Terms of Service </button>
                    <p className="grow leading-[2rem]"> . </p>
                </div>
                <button className="h-[3rem] rounded-full bg-[#996D01] px-[1.5rem] text-white text-[1rem] mb-[1rem] w-fit"> Sign up </button>
            </div>
            <div className="flex items-center">
                <p className="text-[#747067] text-[1rem] leading-[1.6875rem] mr-[10px]"> Already have an account? </p>
                <Link href="/auth/signin">
                    <a target="_self"
                        className="border-b-[2px] border-[#996D01] text-primary text-[1rem] leading-[1.6875rem] w-fit font-bold">
                        Sign-in
                    </a>
                </Link>
            </div>
            
        </div>
    )
}


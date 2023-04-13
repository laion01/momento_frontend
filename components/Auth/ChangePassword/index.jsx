import { useState } from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState({
        value: '', error: ''
    });
    const [password, setPassword] = useState({
        value: '', error: ''
    });
    const [repeat, setRepeat] = useState({
        value: '', error: ''
    });
    const [isPassword, showPassword] = useState(true);
    const [isOldPassword, showOldPassword] = useState(true);
    const [isAcceptTerms, acceptTerms] = useState(false);

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex flex-col items-center pt-[8rem] pb-[3rem] min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-9rem)]">
            <div className="bg-white flex flex-col items-center p-[1.5rem] h-fit mx-[50px] mb-[2rem] shadow-md w-[calc(100%-40px)] md:w-[450px] mb-[2rem] rounded-[0.5rem]">
                <p className="text-primary text-[1.5rem] text-center font-bold mb-[1.5rem] leading-[2.25rem]"> Change Password </p>
                <div className="w-full flex items-center h-[3rem] px-[10px] border-[1px] border-[#D4D4D4] rounded-[4px] mb-[1.5rem]">
                    <input type={isOldPassword ? "password" : "text"} className="grow text-[1rem] outline-none" placeholder="Old password"/>
                    <button onClick={() => { showOldPassword(!isOldPassword) }}>
                        <FontAwesomeSvgIcon width={24} height={24} icon={ isOldPassword ? faEye : faEyeSlash} color="#747067"/>
                    </button>
                </div>
                <div className="w-full flex items-center h-[3rem] px-[10px] border-[1px] border-[#D4D4D4] rounded-[4px] mb-[1.5rem]">
                    <input type={isPassword ? "password" : "text"} className="grow text-[1rem] outline-none" placeholder="New Password"/>
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
                
                <button className="h-[3rem] rounded-full bg-[#996D01] px-[1.5rem] text-white text-[1rem] mb-[1rem] w-fit"> Save </button>
            </div>
        </div>
    )
}


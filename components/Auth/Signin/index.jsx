import { useState } from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { login } from "store/slices/authSlice";
import AUTH_API from "api/Auth";

export default function Signin() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [isPassword, showPassword] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLoginClicked = async () => {
        try {
            const res = await AUTH_API.login({email, password});
            console.log(res);
            const user = res.data;

            dispatch(login({
                logined: true,
                fullname: `${user.first_name} ${user.last_name}`,
                firstName: user.first_name,
                lastName: user.last_name,
                phone: user.phone,
                email: `${user.email}`,
                avatar: user.avatar,
                userId: user.id,
                country: JSON.parse(user.country ? user.country : "{}"),
                state: JSON.parse(user.state ? user.state : "{}"),
                city: user.city,
                apartment: user.apartment,
                address: user.address,
                zipcode: user.zipcode,
                authToken: user.authToken,
                role: user.role,
            }))

            toast.success('Login Success', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // set local storage
            localStorage.setItem("authToken", user.authToken);
            // get local storage
            const t = localStorage.getItem("authToken");
            console.log("authToken", t);
            router.push("/")
            return ;
        } catch (e) {
            console.log(e);
            if(e.response) {
                toast.error(e.response.data.message, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                toast.error('Connection Error', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    }

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex flex-col items-center pt-[8rem] pb-[3rem] min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-4.5rem)]">
            <div className="bg-white flex flex-col items-center p-[1.5rem] h-fit mx-[50px] mb-[2rem] shadow-md w-[calc(100%-40px)] md:w-[450px] mb-[2rem] rounded-[0.5rem]">
                <p className="text-primary text-[1.5rem] text-center font-bold mb-[1.5rem] leading-[2.25rem]"> Sign-In </p>
                <input type="email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px] mb-[1rem]" placeholder="Email" />
                <div className="w-full flex items-center h-[3rem] px-[10px] border-[1px] border-[#D4D4D4] rounded-[4px] mb-[24px]">
                    <input type={isPassword ? "password" : "text"} value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} className="grow text-[1rem] outline-none" placeholder="Password" />
                    <button onClick={() => { showPassword(!isPassword) }}>
                        <FontAwesomeSvgIcon width={24} height={24} icon={isPassword ? faEye : faEyeSlash} color="#747067" />
                    </button>
                </div>
                <button className="h-[3rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem] mb-[1rem] w-fit"
                    onClick={() => {
                        onLoginClicked()
                    }}
                > Sign in </button>
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


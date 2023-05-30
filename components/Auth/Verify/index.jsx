import { useEffect, useRef, useState } from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import UTILS_API from "api/Util";
import AUTH_API from "api/Auth";
import { useAuth } from "store/hook";
import { useRouter } from "next/router";
import { setLogin } from "store/slices/authSlice";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

export default function Verify() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { email, first_name, logined } = useAuth()
    const [digit1, setDigit1] = useState("");
    const [digit2, setDigit2] = useState("");
    const [digit3, setDigit3] = useState("");
    const [digit4, setDigit4] = useState("");

    const digit1Ref = useRef(null);
    const digit2Ref = useRef(null);
    const digit3Ref = useRef(null);
    const digit4Ref = useRef(null);

    const handleChange = (e, index) => {
        const val = e.target.value;
        
        // If the value is not a digit, return
        if (!/^\d$/.test(val) && val !== '') return;
    
        switch (index) {
          case 1:
            setDigit1(val);
            if (val) digit2Ref.current.focus();
            break;
          case 2:
            setDigit2(val);
            if (val) digit3Ref.current.focus();
            else digit1Ref.current.focus();
            break;
          case 3:
            setDigit3(val);
            if (val) digit4Ref.current.focus();
            else digit2Ref.current.focus();
            break;
          case 4:
            setDigit4(val);
            if (!val) digit3Ref.current.focus();
            break;
          default:
            break;
        }
    }

    useEffect(() => {
        if(logined) {
            router.push("/")
        }
    }, [logined])

    const onVerify = async () => {
        const { data } = await AUTH_API.verifyAccount("" + digit1 + digit2 + digit3 + digit4, email);

        if(data.success) {
            toast.success('Your email successfully verified!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            dispatch(setLogin());
            router.push("/");
        } else {
            toast.error('Invalid verification code!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex flex-col items-center pt-[8rem] pb-[3rem] min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-4.5rem)]">
            <div className="bg-white flex flex-col items-center p-[1.5rem] h-fit mx-[50px] mb-[2rem] shadow-md w-[calc(100%-40px)] md:w-[450px] mb-[2rem] rounded-[0.5rem]">
                <p className="text-primary text-[1.5rem] text-center font-bold mb-[2rem] leading-[2.25rem]"> Verify your email </p>
                <p className="text-[#747067] text-[1rem] text-center mb-[1.5rem] leading-[1.6875rem]"> Please enter the 4 digit code sent to email@example.com </p>

                <div className="flex justify-center items-center mb-[1.5rem]">
                    <input type="text"
                        value={digit1} ref={digit1Ref}
                        onChange={(e) => handleChange(e, 1)} className="mx-[0.5rem] w-[4rem] h-[4rem] text-[1.5rem] font-bold text-center outline-none border-[1px] border-[#D4D4D4] rounded-[0.5rem]" maxLength={1} />
                    <input type="text"
                        value={digit2} ref={digit2Ref}
                        onChange={(e) => handleChange(e, 2)} className="mx-[0.5rem] w-[4rem] h-[4rem] text-[1.5rem] font-bold text-center outline-none border-[1px] border-[#D4D4D4] rounded-[0.5rem]" maxLength={1} />
                    <input type="text"
                        value={digit3} ref={digit3Ref}
                        onChange={(e) => handleChange(e, 3)} className="mx-[0.5rem] w-[4rem] h-[4rem] text-[1.5rem] font-bold text-center outline-none border-[1px] border-[#D4D4D4] rounded-[0.5rem]" maxLength={1} />
                    <input type="text"
                        value={digit4} ref={digit4Ref}
                        onChange={(e) => handleChange(e, 4)} className="mx-[0.5rem] w-[4rem] h-[4rem] text-[1.5rem] font-bold text-center outline-none border-[1px] border-[#D4D4D4] rounded-[0.5rem]" maxLength={1} />
                </div>
                <button className="h-[3rem] rounded-full bg-[#996D01] disabled:bg-[#BCB9B3] px-[1.5rem] text-white text-[1rem] mb-[1.5rem] w-fit" 
                    onClick={() => {onVerify()}}
                    disabled={!digit1 || !digit2 || !digit3 || !digit4}
                > Verify </button>

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


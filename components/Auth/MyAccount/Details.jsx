import { useAuth } from "store/hook";
import { useState } from "react"

export default function Details() {
    const {firstName, lastName, address} = useAuth();
    
    const [first_name, setFirstName] = useState({
        value: firstName, error: '', newValue: '',
    });
    const [last_name, setLastName] = useState({
        value: lastName, error: '', newValue: '',
    });
    const [_address, setAddress] = useState({
        value: address, error: '', newValue: '',
    });

    return (
        <div className="bg-white rounded-[1rem] px-[1.125rem] py-[1rem] flex flex-col h-fit grow">
            <h6 className="text-[1.5rem] leading-[2.25rem] font-bold text-primary mb-[1rem]"> Account Details </h6>
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row mb-[1.5rem]">
                    <div className="grow pr-[0px] md:pr-[0.75rem] mb-[1.5rem] md:mb-[0rem]">
                        <input type="text" value={first_name.value} onChange = {(e) => setFirstName({...first_name, value: e.target.value, error: ''})} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="First Name"/>
                    </div>
                    <div className="grow pl-[0px] md:pl-[0.75rem]">
                        <input type="text" value={last_name.value} onChange = {(e) => setLastName({...last_name, value: e.target.value, error: ''})} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="flex mb-[1.5rem]">
                    <input type="text" value={address} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Address"/>
                </div>
                <div className="flex mb-[2rem]">
                    <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Phone"/>
                </div>
                <h6 className="text-[1.5rem] leading-[2.25rem] font-bold text-primary mb-[2rem]"> Change Password </h6>

                <div className="flex mb-[1.5rem]">
                    <input type="password" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="new Password"/>
                </div>
                <div className="flex mb-[2rem]">
                    <input type="password" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="repeat Password"/>
                </div>

                <button className="w-fit h-[3rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem] mb-[2rem]"> Save changes </button>

            </div>
        </div>
    )
}
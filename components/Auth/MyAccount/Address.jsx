export default function Address() {
    return (
        <div className="bg-white rounded-[1rem] px-[1.125rem] py-[1rem] flex flex-col h-fit grow">
            <h6 className="text-[1.5rem] leading-[2.25rem] font-bold text-primary mb-[1rem]"> Orders </h6>
            <p className="text-[1rem] leading-[1.375rem] text-[#BEB8A4] mb-[0.5rem]"> Billing Adress </p>
            <button className="text-[1rem] leading0[1.375rem] text-[#0FAFE9] w-fit mb-[2rem]"> Edit </button>
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row mb-[1.5rem]">
                    <div className="grow pr-[0px] md:pr-[0.75rem] mb-[1.5rem] md:mb-[0rem]">
                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="First Name"/>
                    </div>
                    <div className="grow pl-[0px] md:pl-[0.75rem]">
                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="flex mb-[1.5rem]">
                    <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Address"/>
                </div>
                <div className="flex flex-col md:flex-row mb-[1.5rem]">
                    <div className="grow pr-[0px] md:pr-[0.75rem] mb-[1.5rem] md:mb-[0rem]">
                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Apartment, suite, etc. (optional)"/>
                    </div>
                    <div className="grow pl-[0px] md:pl-[0.75rem]">
                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Phone Number"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mb-[1.5rem]">
                    <div className="grow pr-[0px] md:pr-[0.75rem] mb-[1.5rem] md:mb-[0rem]">
                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="City"/>
                    </div>
                    <div className="grow pl-[0px] md:pl-[0.75rem]">
                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Country"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mb-[1.5rem]">
                    <div className="grow pr-[0px] md:pr-[0.75rem] mb-[1.5rem] md:mb-[0rem]">
                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="State"/>
                    </div>
                    <div className="grow pl-[0px] md:pl-[0.75rem]">
                        <input type="text" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="ZIP Code"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
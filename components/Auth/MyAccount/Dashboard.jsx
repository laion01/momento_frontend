import Image from "next/image";

export default function Dashboard({}) {
    return (
        <div className="bg-white rounded-[1rem] px-[1.125rem] py-[1rem] flex felx-col h-fit grow">
            <div className="w-full flex flex-col px-[0.5625rem]">
                <h6 className="text-[1.125rem] leading-[1.6875rem] font-bold text-primary mb-[1rem]"> Dashboard </h6>
                <p className="text-[1rem] leading-[1.6875rem] mb-[1rem] mr-[5rem]"> From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details. </p>
                <div className="flex flex-wrap flex-col justify-center items-center md:flex-row">
                    <div className="grow min-w-[17rem] px-[0.5625rem] mb-[2rem]">
                        <button className="flex justify-center items-center h-[11rem] w-full rounded-[1rem] border-[0.125rem] border-[#D4D4D4]">
                            <div className="w-[4.75rem] h-[4.75rem] mr-[0.75rem]">
                                <Image alt="" width={76} height={76} src="/images/shopping-bag.svg"/>
                            </div>
                            <p className="text-primary text-[1.125rem] font-bold"> Orders </p>
                        </button>
                    </div>
                    <div className="grow min-w-[17rem] px-[0.5625rem] mb-[2rem]">
                        <button className="flex justify-center items-center h-[11rem] w-full rounded-[1rem] border-[0.125rem] border-[#D4D4D4]">
                            <div className="w-[4.75rem] h-[4.75rem] mr-[0.75rem]">
                                <Image alt="" width={76} height={76} src="/images/map-pin.svg"/>
                            </div>
                            <p className="text-primary text-[1.125rem] font-bold"> Address </p>
                        </button>
                    </div>
                    <div className="grow min-w-[17rem] px-[0.5625rem] mb-[2rem]">
                        <button className="flex justify-center items-center h-[11rem] w-full rounded-[1rem] border-[0.125rem] border-[#D4D4D4]">
                            <div className="w-[4.75rem] h-[4.75rem] mr-[0.75rem]">
                                <Image alt="" width={76} height={76} src="/images/user-details.svg"/>
                            </div>
                            <p className="text-primary text-[1.125rem] font-bold"> Account details </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
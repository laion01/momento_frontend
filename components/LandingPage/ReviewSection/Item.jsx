import { data } from "autoprefixer"
import Image from "next/image"

export default function Item({data}) {
    return (
        <div className="w-[335px] h-[318px] p-[20px] m-[10px] padding-[16px] flex flex-col justify-start items-center">
            <p className="text-[1.5rem] leading-[2.25rem] text-[#747067] mb-[2rem]"> { data.context } </p>
            <div className="w-full flex items-center">
                <div className="w-[3.5rem] h-[3.5rem] overflow-hidden rounded-full mr-[1rem]">
                    <Image alt={data.user.name} src={data.user.avatar} width={56} height={56}/>
                </div>
                <div className="flex flex-col">
                    <p className="text-[1.125rem] text-[#AC8118] font-bold mb-[1.5rem]"> { data.user.name } </p>
                </div>
            </div>
        </div>
    )
}
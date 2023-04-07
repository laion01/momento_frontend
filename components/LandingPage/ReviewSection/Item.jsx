import Image from "next/image"

export default function Item({image, title, context}) {
    return (
        <div className="w-[335px] h-[318px] p-[20px] m-[10px] bg-white padding-[16px] flex flex-col justify-start items-center shadow">
            <div className="mb-[24px] w-[50px] h-[50px]">
                <Image alt="" src={image} width={50} height={50}/>
            </div>
            <h5 className="text-[1.125rem] text-[#AC8118] font-bold mb-[1.5rem]"> { title } </h5>
            <p className="text-[0.875rem] leading-[1.5rem] text-[#747067]"> { context } </p>
        </div>
    )
}
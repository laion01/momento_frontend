import Image from "next/image";

export default function BagItem({image, name, price}) {
    return (
        <div className="flex h-[9rem] p-[0.75rem] bg-[#F5F5F5] mb-[0.125rem]">
            <div className="w-[7.5rem] h-[7.5rem] rounded-[0.25rem] bg-white mr-[1.5rem]">
                <Image alt="" src={image} width={120} height={120} />
            </div>
            <div className="grow flex flex-col">
                <p className="text-[1rem] leading-[1.6875rem] font-bold text-[#747067]"> { name } </p>
                <p className="text-[0.875rem] text-[#747067] font-light"> ${ price } </p>
            </div>
        </div>
    )
}
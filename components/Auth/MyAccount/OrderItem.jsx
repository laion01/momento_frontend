import { data } from "autoprefixer";
import Image from "next/image";
import Link from "next/link";

export default function OrderItem({data}) {
    return (
        <tr className="px-[30px] text-[1rem] leading-[1.6875rem] h-[5rem] my-[0.5rem] border-b-[1px] border-[#D4D4D4] flex items-center w-full">
            <td className="text-[#9E785D] text-[1rem] leading-[1.375] w-[241px] font-medium"> { data.name } </td>
            <td className="text-[#9E785D] text-[0.875rem] leading-[1.375] w-[120px] text-center"> # { data.id } </td>
            <td className="text-[#9E785D] text-[0.875rem] leading-[1.375] w-[120px] text-center"> { data.status } </td>
            <td className="text-[#9E785D] text-[0.875rem] leading-[1.375] w-[80px]"> { data.quantity } </td>
            <td className="text-[#9E785D] text-[1rem] leading-[1.375] w-[120px] font-medium"> $ { data.totalPrice } </td>
            <td className="flex justify-start items-center w-[7.5rem]">
                <Link href={`/order?id=${data.id}`}>
                    <a target="_blank"
                        className="leading-[3rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem]">
                        Details
                    </a>
                </Link>
            </td>
            <td className="flex justify-start items-center w-[8rem] grow">
                <Image alt="" src="/images/download.svg" width={24} height={24} />
                <button className="ml-[0.5rem] text-primary text-[1rem]"> Download </button>
            </td>
        </tr>
    )
}
import { data } from "autoprefixer";
import Image from "next/image";
import Link from "next/link";

export default function OrderItem({data}) {
    return (
        <tr className="px-[30px] text-[1rem] h-[3rem] border-b-[1px] border-[#D4D4D4] flex items-left w-full">
            <td className="text-[#9E785D] leading-[3rem] w-[80px] text-center"> # { data.id } </td>
            <td className="text-[#9E785D] leading-[3rem] w-[80px] text-center"> { data.SoldProducts.length } </td>
            <td className="text-[#9E785D] leading-[3rem] w-[120px] font-bold"> $ { data.totalPrice ? data.totalPrice : 0 } </td>
            <td className="text-[#9E785D] leading-[3rem] w-min-[300px] grow font-medium"> { data.createdAt } </td>
            <td className="flex justify-start items-center w-[7.5rem]">
                <Link href={`/order?id=${data.id}`}>
                    <a target="_blank"
                        className="leading-[2.5rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem]">
                        Details
                    </a>
                </Link>
            </td>
            {/* <td className="flex justify-start items-center w-[8rem] grow">
                <Image alt="" src="/images/download.svg" width={24} height={24} />
                <button className="ml-[0.5rem] text-primary text-[1rem]"> Download </button>
            </td> */}
        </tr>
    )
}
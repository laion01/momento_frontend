import { data } from "autoprefixer";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faCheck, faClose, faEye, faTrash, faGem } from "@fortawesome/free-solid-svg-icons";
export default function OrderItem({data}) {
    return (
        <tr className="px-[30px] text-[1rem] h-[3rem] border-b-[1px] border-[#D4D4D4] flex items-left w-full">
            <td className="text-[#9E785D] leading-[3rem] w-[80px] text-center"> # { data.id } </td>
            <td className="text-[#9E785D] leading-[3rem] w-[80px] flex items-center">
                <FontAwesomeSvgIcon icon={faGem} width={24} height={24} />
                <p className="ml-[0.5rem]"> { data.SoldProducts.length }</p>
            </td>
            <td className="text-[#9E785D] leading-[3rem] w-[120px] font-bold"> $ { data.totalPrice ? data.totalPrice : 0 } </td>
            <td className="text-[#9E785D] leading-[3rem] w-[240px] font-medium"> { data.createdAt } </td>
            <td className="text-[#9E785D] leading-[3rem] w-[280px] grow font-medium flex items-center"> 
                <div className="w-[1.5rem] h-[1.5rem] rounded-full flex justify-center items-center" style={{ backgroundColor: data.status ==1 ? "green" : "red"}}>
                    <FontAwesomeSvgIcon icon={ data.status ? faCheck : faClose} width={16} height={16} color="white" />
                </div>
                <p className="ml-[0.5rem]"> { data.pid ? data.pid : "Not paid" } </p>
            </td>
            <td className="flex justify-start items-center w-fit">
                <Link href={`/order?id=${data.id}`}>
                    <a target="_blank" className="w-[2rem] h-[2rem] rounded-full bg-[#996D01] text-white flex justify-center items-center mr-[0.5rem]">
                        <FontAwesomeSvgIcon icon={faEye} width={16} height={16}/>
                    </a>
                </Link>
                <Link href={`/order?id=${data.id}`}>
                    <a target="_blank" className="w-[2rem] h-[2rem] rounded-full bg-[#996D01] text-white flex justify-center items-center">
                        <FontAwesomeSvgIcon icon={faTrash} width={16} height={16}/>
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
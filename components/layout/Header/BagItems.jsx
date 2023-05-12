import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faImage, faTrash, faGem } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeItemFromBag } from "store/slices/utilSlice";

export default function BagItem({data}) {
    const dispatch = useDispatch();

    return (
        <div className="flex h-[9rem] p-[0.75rem] bg-[#F5F5F5] mb-[0.125rem]">
            <div className="min-w-[7.5rem] h-[7.5rem] rounded-[0.25rem] text-primary bg-white mr-[1.5rem] relative overflow-hidden flex justify-center items-center border-[1px] border-[#00000030]">
                { data.image?.pathname ?
                    <Image alt="" layout="fill" objectFit="cover" src={data.image.pathname} width={data.image.width} height={data.image.height} /> : 
                    <FontAwesomeSvgIcon icon={faGem} width={64} height={64} />
                }
            </div>
            <div className="grow flex flex-col">
                <p className="text-[1rem] leading-[1.6875rem] font-bold text-[#747067]"> { data.name } </p>
                <div className="flex items-center mt-[0.25rem]">
                    <p className="text-[1rem] text-[#747067] font-light mr-[0.875rem]"> price : <span className="font-bold">${ data.price }</span> </p>
                    <p className="text-[1rem] text-[#747067] font-light"> quantity : <span className="font-bold">{ data.quantity }</span> </p>
                </div>
                <div className="grow"></div>
                
                <div className="flex">
                    <div className="grow"></div>
                    <button className="flex text-primary items-center rounded-full bg-[#e4e4e4] px-[0.875rem] py-[0.25rem]"
                        onClick={() => {dispatch(removeItemFromBag({locketId: data.locketId, metalId: data.metalId, colorId: data.colorId}))}}
                    >
                        <FontAwesomeSvgIcon icon={faTrash} width={16} height={16} />
                        <p className="ml-[0.25rem]"> Delete </p>
                    </button>
                </div>
            </div>
        </div>
    )
}
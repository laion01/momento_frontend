import Image from "next/image"
import { useEffect, useState } from "react"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faClose, faTrash, faGem } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useUtil } from "store/hook";
import { setQuantityInBag } from "store/slices/utilSlice";
import { removeItemFromBag } from "store/slices/utilSlice";

export default function Item({data}) {
    const dispatch = useDispatch()
    const { metals, colors } = useUtil()
    const [quantity, setQuantity] = useState(data.quantity);

    useEffect(() => {
        dispatch(setQuantityInBag({locketId: data.locketId, metalId: data.metalId, colorId: data.colorId, quantity}));
    }, [quantity])

    const getMetalName = (id) => {
        for(let i = 0 ; i< metals.length; i++) {
            if(metals[i].id == id)
                return metals[i].name;
        }
        return "none";
    }

    const getColor = (id) => {
        for(let i = 0 ; i< colors.length; i++) {
            if(colors[i].id == id)
                return colors[i];
        }
        return { name : "none", image: "/images/colors/empty.svg"};
    }

    return (
        <div className="flex border-b-[1px] border-b-[#D4D4D4] mb-[1.5rem]">
            <div className="w-[7.5rem] h-[7.5rem] text-primary mb-[1.5rem] mr-[1.5rem] relative flex justify-center items-center rounded-[0.5rem] border-[1px] border-[#00000030] overflow-hidden">
                { data.image?.pathname ? 
                    <Image alt="" width={data.image.width} height={data.image.height} src={data.image.pathname}/> :
                    <FontAwesomeSvgIcon icon={faGem} width={64} height={64} />
                }
            </div>
            <div className="flex flex-col grow">
                <div className="flex justify-between items-center mb-[0.25rem] text-[1rem] font-bold leading-[1.6875rem] text-[#747067]">
                    <p> {data.name} </p>
                    <p className="px-[0.75rem] py-[0.125rem] bg-[#e0e0e0] rounded-full text-[#ff0000]"> ${data.price} </p>
                </div>
                <p className="text-[0.875rem] text-[#747067] mb-[0.25rem] mt-[0.25rem]"> Metal: <span className="font-bold">{getMetalName(data.metalId)} </span></p>
                <div className="flex">
                    <p className="text-[0.875rem] text-[#747067] mb-[0.25rem]"> Color: </p>
                    <div className="w-[1.5rem] h-[1.5rem]">
                        <Image src={getColor(data.colorId).image} width={24} height={24}/>
                    </div>
                    <p className="text-[0.875rem] text-[#747067] mb-[0.25rem] font-bold"> {getColor(data.colorId).name} </p>

                </div>
                <div className="flex items-center">
                    <p className="text-[#747067] mr-[10px] text-[0.875rem] leading-[1.6875rem]"> Quantity: </p>
                    <button className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#996D01] text-white text-[1.5rem] text-center leading-[1.5rem]"
                        onClick={() => { setQuantity( quantity > 1 ? quantity - 1 : 1)}}
                    > - </button>
                    <p className="text-[#747067] mx-[16px] text-[1.25rem] font-bold"> { quantity } </p>
                    <button className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#996D01] text-white text-[1.5rem] text-center leading-[1.5rem]"
                        onClick={() => { setQuantity(quantity + 1)}}
                    > + </button>
                    <div className="grow"></div>
                    <button className="flex text-primary items-center rounded-full bg-[#e4e4e4] px-[0.875rem] py-[0.25rem]"
                        onClick={() => { dispatch(removeItemFromBag({locketId: data.locketId, metalId: data.metalId, colorId: data.colorId})) }}
                    >
                        <FontAwesomeSvgIcon icon={faTrash} width={16} height={16} />
                        <p className="ml-[0.25rem]"> Delete </p>
                    </button>
                </div>
            </div>
        </div>
    )
}
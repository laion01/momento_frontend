import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import LocketItem from "components/utils/LocketItem/Item";
import LocketViewer from "./LocketViewer"
import Image from "next/image";
import { useEffect, useState } from "react";
import UTILS_API from "api/Util";



export default function LocketsGallery() {
    const [locketIds, setLocketIds] = useState([]);

    useEffect(() => {
        load();
    }, [])

    const load = async () => {
        const lockets = await UTILS_API.getLocketsGallery();
        setLocketIds([...lockets]);
    }

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container grow flex flex-col justify-center items-center relative">
                <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[6.75rem] text-[#AC8118] text-center mt-[100px]">
                    Momento® Locket
                </h2>
                <p className="text-[1.5rem] leading-[2.25rem] text-center text-[#747067] leading-[2.25rem] mb-[3rem]"> 
                    By Galatea Jewelry by Artist
                </p>
                <div className="flex flex-wrap justify-center items-center mt-[20px] mb-[5rem]">
                    {locketIds.map((item, index) => 
                        <LocketItem key={index} locketId={item.locketId}/>
                    )}
                </div>
            </div>
        </div>
    )
}


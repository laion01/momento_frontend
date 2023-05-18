import LocketItem from "components/utils/LocketItem/Item"
import UTILS_API from "api/Util"
import { useState, useEffect } from "react"
import { useRouter } from "next/router";

export default function LocketsSection() {
    const router = useRouter();
    const [locketIds, setLocketIds] = useState([]);
    const [totalLocketCounts, setTotalCount] = useState(0);
    useEffect(() => {
        load();
    }, [])

    const load = async () => {
        const lockets = await UTILS_API.getLocketsGallery();
        setTotalCount(lockets.length);
        if(lockets.length > 3) {
            setLocketIds([lockets[0], lockets[1], lockets[2]]);
        } else {
            setLocketIds([...lockets]);
        }
    }

    return (
        <div className="mx-[20px] md:mx-[40px] w-[calc(100vw-40px)] md:w-[calc(100vw-80px)] bg-[#F5F5F5] flex flex-col justify-center relative pt-[20px] px-[24px]">
            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-[#AC8118] text-center mt-[100px] mb-[40px]">
                Lockets
            </h2>
            <p className="text-[1.5rem] leading-[2.25rem] text-center text-[#747067] leading-[2.25rem] mb-[1.5rem]"> Buy now and get one for yourself and one for your loved one, so you can share and synchronize your photo album together </p>
            <div className="flex flex-wrap justify-center items-center mt-[20px]">
                { locketIds.map((item, index) => 
                    <LocketItem key={index} locketId={item.locketId}/>
                )}
            </div>
            {totalLocketCounts > 3 && 
                <div className="w-full flex justify-center mt-[3rem]">
                    <button className="h-[3rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem]" onClick={() => {router.push('/lockets')}}> View all </button>
                </div>
            }
        </div>
    )
}
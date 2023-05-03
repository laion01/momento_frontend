import Image from "next/image"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import Button from "../Buttons/Button";
import { useUtil } from "store/hook";
import UTILS_API from "api/Util";

export default function LocketItem({ locketId }) {
    const router = useRouter();

    const [price, setPrice] = useState(100);
    const [validTypes, setValidTypes] = useState([]);
    const [validMetals, setValidMetals] = useState([]);
    const [validColors, setValidColors] = useState([]);

    const [colorId, setColorId] = useState(0);
    const [metalId, setMetalId] = useState(0);
    const [images, setImageList] = useState([]);

    const load = async () => {
        const { products } = await UTILS_API.getValidLockets(locketId);
        setValidTypes([...products])

        let firstMetalId = 0, firstColorId = 0;
        for (let i = 0; i < products.length; i++) {
            if (firstMetalId == 0) {
                firstMetalId = products[i].metalId
                firstColorId = products[i].colorId
            }
        }
        
        const ms = [];
        const mids = [];
        products.map((product) => {
            if (!mids.includes(product.metalId)) {
                ms.push(product.Metal)
                mids.push(product.metalId)
            }
        })
        setValidMetals([...ms]);
        setMetalId(firstMetalId)
        setColorId(firstColorId)
    }

    useEffect(() => {
        load()
    }, [])

    useEffect(() => {
        const color_list = [];
        const cids = [];
        validTypes.map((product) => {
            if (product.metalId == metalId && !cids.includes(product.colorId)) {
                color_list.push(product.Color)
                cids.push(product.colorId)
            }
        })

        if (cids.length && !cids.includes(colorId)) {
            setColorId(cids[0])
        }
        setValidColors([...color_list])
    }, [metalId])

    useEffect(() => {
        validTypes.map((product) => {
            if (product.metalId == metalId && product.colorId == colorId) {
                setPrice(product.price);
                setImageList([...product.Files]);
            }
        })
    }, [colorId])

    return (
        <div className="w-[436px] h-[569px] m-[0.625rem] bg-white padding-[16px] flex flex-col justify-start items-center shadow hover:shadow-md cursor-pointer">
            <div className="w-[calc(100%-2.5rem)] hover:w-[calc(100%-1.25rem)] hover:pt-[0.5rem] h-full flex flex-col m-[1.25rem] hover:m-[0.75rem] justify-start items-center bg-[#f5f5f5] transition-all duration-500">
                <button className="mb-[5px] -mt-[20px] flex flex-col justify-end h-[16.5rem] max-w-[13rem]"
                    onClick={() => { router.push({ pathname: "/locket" }) }}>
                    { images.length &&
                        <Image alt="" src={images[0].pathname} width={images[0].width} height={images[0].height} />
                    }
                </button>
                <h5 className="text-[1rem] leading-[1.6875rem] text-[#747067] font-bold text-center"> { validTypes.length ? validTypes[0].Locket.name : "Momento Locket"} </h5>
                <p className="text-[1.125rem] leading-[1.5rem] text-[#747067] mb-[24px] text-center"> $ {price} </p>
                <div className="flex items-center mb-[1.5rem]">
                    <p className="text-[#747067] mr-[16px] text-[1rem]"> Metal: </p>
                    <div className="flex justify-center items-center">
                        {validMetals.map((cat, index) =>
                            <button key={cat.id} className="rounded-full text-[#747067] text-center leading-[1.3125rem] mx-[4px] px-[12px] border-[#747067] h-[33px]" style={{ borderWidth: cat.id == metalId ? 2 : 0, backgroundColor: cat.id == metalId ? "transparent" : "#74706714" }}
                                onClick={() => { setMetalId(cat.id) }}
                            >
                                {cat.name}
                            </button>
                        )}
                    </div>
                </div>
                <div className="flex items-center mb-[1.5rem]">
                    <p className="text-[#747067] mr-[16px] text-[1rem]"> Color: </p>
                    <div className="flex justify-center items-center">
                        {validColors.map((color, index) =>
                            <button key={color.id} className="rounded-full pt-[3px] w-[2.5rem] h-[2.5rem] flex justify-center items-center border-[#747067]" style={{ borderWidth: color.id == colorId ? 2 : 0 }}
                                onClick={() => { setColorId(color.id) }}
                            >
                                <Image alt={color.name} src={color.image} width={32} height={32} />
                            </button>
                        )}
                    </div>
                </div>
                <Button label="Add to Bag" onClick={(e) => { alert("123"), e.stopPropagation() }} />
            </div>
        </div>
    )
}
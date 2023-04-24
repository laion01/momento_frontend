import { useRouter } from "next/router"
import { useAuth, useUtil } from "store/hook";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setMyBag } from "store/slices/utilSlice";
import BagItem from "./BagItems";
import Button from "components/utils/Buttons/Button";

export default function BagMenu({ onCloseMenu }) {
    const dispatch = useDispatch();
    const { myBag } = useUtil()
    const router = useRouter();

    useEffect(() => {
        dispatch(setMyBag({
            myBag: [
                {
                    image: '/images/jewelry.png',
                    name: 'Momento® Locket Pearl Flower',
                    price: '300.0'
                }, {
                    image: '/images/jewelry.png',
                    name: 'Momento® Locket Pearl Flower',
                    price: '300.0'
                }, {
                    image: '/images/jewelry.png',
                    name: 'Momento® Locket Pearl Flower',
                    price: '300.0'
                }
            ]
        }))
    }, [])

    return (
        <div className='absolute top-[60px] right-[0.5rem] flex flex-col min-w-[400px] justify-center'>
            <div className='fixed top-0 left-0 min-w-[100vw] min-h-[100vh] z-10' onClick={() => { onCloseMenu() }}></div>
            <div className='flex justify-end overflow-hidden z-30'>
                <div className='h-[13px] overflow-hidden -mr-[1px]'>
                    <Image alt="" src="/images/triangle.svg" width={48} height={40} />
                </div>
            </div>
            <div className="-mt-[1px] bg-white rounded-tr-[0px] rounded-[8px] flex flex-col p-[1.125rem] border-[1px] border-[#D4D4D4] drop-shadow z-[20]">
                {myBag.map((item, index) =>
                    <BagItem image={item.image} name={item.name} price={item.price} />
                )}
                <div className="mt-[1.5rem] flex justify-center">
                    <Button label="Show Bag" onClick={(e) => { router.push({ pathname: '/order' }), e.stopPropagation() }} />
                </div>
            </div>
            
        </div>
    )
}
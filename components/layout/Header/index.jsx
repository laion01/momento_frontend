import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useAuth, useUtil } from 'store/hook';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import UserDropdown from './UserDropdown';
import NotificationMenu from './NotificationMenu';
import BagMenu from './BagMenu';
import { setColors, setMetals, setMyBag, setProducts, setProductTypes } from 'store/slices/utilSlice';
import Button from 'components/utils/Buttons/Button';

export default function Header() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { myBag } = useUtil();
    const { avatar } = useAuth();
    const [isUserDropDown, openUserDropdown] = useState(false);
    const [isNotificationDropDown, openNotificationDropdown] = useState(false);
    const [isBagDropDown, openBagDropdown] = useState(false);
    const [ordersCount, setOrdersCount] = useState(4);
    const [isShadow, showShadow] = useState(false);

    useEffect(() => {
        dispatch(setMyBag({myBag: [
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
        ]}));

        dispatch(setProductTypes({ productTypes : [
            { 
                id: 0, 
                name: "type 1", 
            }, 
            { 
                id: 1, 
                name: "type 2", 
            }, 
            { 
                id: 2, 
                name: "type 3", 
            }, 
            { 
                id: 3, 
                name: "type 4", 
            }, 
        ]}))

        dispatch(setMetals({ metals : [
            { 
                id: 0,
                name: "metal 0", 
            }, 
            { 
                id: 1,
                name: "metal 1", 
            }, 
            { 
                id: 2,
                name: "metal 2", 
            }, 
            { 
                id: 3,
                name: "metal 3", 
            }, 
        ]}))

        dispatch(setColors({ colors : [
            {
                id: 1, 
                name: "Red",
                image: "/images/colors/color_1.svg"
            }, {
                id: 2, 
                name: "green",
                image: "/images/colors/color_2.svg"
            }, {
                id: 3, 
                name: "blue",
                image: "/images/colors/color_3.svg"
            }, {
                id: 4, 
                name: "yellow",
                image: "/images/colors/color_4.svg"
            }, {
                id: 5, 
                name: "pink",
                image: "/images/colors/color_5.svg"
            }, {
                id: 6, 
                name: "purple",
                image: "/images/colors/color_6.svg"
            }, 
        ]}))

        dispatch(setProducts({ products : [
            {
                id: 1,
                name : "Pearl Flower 1",
                type : 0,
            }, {
                id: 2,
                name : "Pearl Flower 2",
                type : 1,
            }, {
                id: 3,
                name : "Pearl Flower 3",
                type : 3,
            }, {
                id: 4,
                name : "Pearl Flower 4 ",
                type : 2,
            }, {
                id: 5,
                name : "Pearl Flower 5",
                type : 2,
            }
        ]}))

    }, [])

    const checkScroll = function () {
        if (window.pageYOffset > window.innerHeight * 0.75) {
            showShadow(true);
        } else {
            showShadow(false);
        }
    }

    return (
        <div className="z-30 bg-[#ffffff90] fixed w-full top-0 flex justify-between items-center transition-all duration-500 bg-white h-[4.5rem] px-[40px]">
            <Link href="/">
                <a target="_self" className='h-[40px] flex cursor-pointer items-center'>
                    <Image
                        src='/images/momento-logo.png'
                        alt=''
                        width={120}
                        height={40}
                    />
                    <div className='mx-[20px] h-full w-[1px] bg-[#747067] opacity-[0.2]'></div>
                    <Image
                        src='/images/galatea-logo.png'
                        alt=''
                        width={156}
                        height={40}
                    />

                    <p className='text-black'> {avatar} </p>
                </a>
            </Link>
            <div className='flex justify-center items-center'>
                <Navbar className="hidden lg:block" />
                <div className='w-[2.5rem] h-[2.5rem] mx-[1.25rem] relative'>
                    <button className='w-[2.5rem] h-[2.5rem]' onClick={() => { openNotificationDropdown(true) }}>
                        <Image alt='' src='/images/bell.svg' width={40} height={40} />
                        { ordersCount > 0 &&
                            <p className='absolute text-white min-w-[1.625rem] min-h-[1.625rem] px-[0.25rem] -top-[0.25rem] -right-[0.75rem] bg-primary rounded-[10px] rounded-bl-[0px] border-[0.125rem] border-white'>
                                { ordersCount }
                            </p>
                        }
                    </button>
                    { isNotificationDropDown && <NotificationMenu onCloseMenu={() => {openNotificationDropdown(false)}}/>}
                </div>
                <div className='w-[2.5rem] h-[2.5rem] mx-[1.25rem] relative'>
                    <button className='w-[2.5rem] h-[2.5rem]' onClick={() => { myBag.length && openBagDropdown(true) }}>
                        <Image alt='' src='/images/bag.svg' width={40} height={40} />
                        { myBag?.length > 0 &&
                            <p className='absolute text-white min-w-[1.625rem] min-h-[1.625rem] px-[0.25rem] -top-[0.25rem] -right-[0.75rem] bg-primary rounded-[10px] rounded-bl-[0px] border-[0.125rem] border-white'>
                                { myBag?.length }
                            </p>
                        }
                    </button>
                    { isBagDropDown && <BagMenu onCloseMenu={() => {openBagDropdown(false)}}/>}
                </div>
                
                <div className='w-[2.5rem] h-[2.5rem] mx-[1.25rem] relative'>
                    <button className='w-[2.5rem] h-[2.5rem]' onClick={() => { openUserDropdown(true) }}>
                        {avatar && <div className='w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden'> <Image alt='' src={avatar} width={40} height={40} /> </div>}
                        {!avatar && <Image alt='' src='/images/avatar.png' width={40} height={40} /> }
                    </button>
                    {isUserDropDown &&
                        <UserDropdown onCloseMenu={() => {openUserDropdown(false)}}/>
                    }
                </div>

                {/* <ConnectWallet className='bg-[#AAEFFF] border-[#400077] border-[2px] rounded-[10px] '
                        colorMode="dark"
                        accentColor="#AAEFFF"
                    /> */}
            </div>
            {/* </div> */}
        </div>
    )
}
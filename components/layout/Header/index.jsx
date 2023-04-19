import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useAuth } from 'store/hook';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import UserDropdown from './UserDropdown';

export default function Header() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { logined } = useAuth();
    const [isDropDown, openDropdown] = useState(false);
    const [itemsCountInBag, setCountInBag] = useState(5);
    const [ordersCount, setOrdersCount] = useState(2);
    const [isShadow, showShadow] = useState(false);

    useEffect(() => {
        if (window) {
            window.onscroll = function () {
                checkScroll();
            }
        }
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
                </a>
            </Link>
            <div className='flex justify-center items-center'>
                <Navbar className="hidden lg:block" />
                
                <button className='w-[2.5rem] h-[2.5rem] mx-[1.25rem] relative'>
                    <Image alt='' src='/images/bell.svg' width={40} height={40} />
                    { ordersCount > 0 &&
                        <p className='absolute text-white min-w-[1.625rem] min-h-[1.625rem] px-[0.25rem] -top-[0.25rem] -right-[0.75rem] bg-primary rounded-[10px] rounded-bl-[0px] border-[0.125rem] border-white'>
                            { ordersCount }
                        </p>
                     }
                </button>
                <button className='w-[2.5rem] h-[2.5rem] mx-[1.25rem] relative'>
                    <Image alt='' src='/images/bag.png' width={40} height={40} />
                    { itemsCountInBag > 0 &&
                        <p className='absolute text-white min-w-[1.625rem] min-h-[1.625rem] px-[0.25rem] -top-[0.25rem] -right-[0.75rem] bg-primary rounded-[10px] rounded-bl-[0px] border-[0.125rem] border-white'>
                            { itemsCountInBag }
                        </p>
                     }
                </button>
                <div className='w-[2.5rem] h-[2.5rem] mx-[20px] relative cursor-pointer'>
                    <div className='w-[2.5rem] h-[2.5rem]' onClick={() => { openDropdown(true) }}>
                        <Image alt='' src='/images/avatar.png' width={40} height={40} />
                    </div>
                    
                    
                    {isDropDown &&
                        <UserDropdown />
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
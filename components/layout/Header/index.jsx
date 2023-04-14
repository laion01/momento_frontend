import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useAuth } from 'store/hook';
import Link from 'next/link';

export default function Header() {
    const { logined } = useAuth();
    const [isDropDown, openDropdown] = useState(false);
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
            <Link href="/auth/signin">
                <a target="_self" className='h-[40px] flex cursor-pointer items-center'>
                    <Image
                        src='/images/momento-logo.png'
                        alt=''
                        width={120}
                        height={40}
                    />
                    <div className='mx-[20px] w-[1px] bg-[#747067] opacity-[0.2]'></div>
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
                <button className='w-[40px] h-[40px] mx-[20px]'>
                    <Image alt='' src='/images/bag.png' width={40} height={40} />
                </button>
                <div className='w-[2.5rem] h-[2.5rem] mx-[20px] relative cursor-pointer'>
                    <div className='w-[2.5rem] h-[2.5rem]' onClick={() => { openDropdown(true) }}>
                        <Image alt='' src='/images/avatar.png' width={40} height={40} />
                    </div>
                    {isDropDown &&
                        <div className='absolute top-[60px] right-[0.5rem] flex flex-col min-w-[280px]'>
                            <div className='fixed top-0 left-0 min-w-[100vw] min-h-[100vh] z-10' onClick={() => { openDropdown(false) }}></div>
                            <div className='flex justify-end overflow-hidden z-30'>
                                <div className='h-[13px] overflow-hidden -mr-[1px]'>
                                    <Image alt="" src="/images/triangle.svg" width={48} height={40} />
                                </div>
                            </div>
                            {logined ?
                                <div className="-mt-[1px] bg-white rounded-tr-[0px] rounded-[8px] flex flex-col p-[1.125rem] border-[1px] border-[#D4D4D4] drop-shadow z-[20]">
                                    <div className='flex flex items-center'>
                                        <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                                            <Image alt="" src="/images/sign-in.svg" width={24} height={24} />
                                        </div>
                                        <p className='text-[#747067] text-[1rem] leading-[1.6875rem]'> My Account </p>
                                    </div>
                                    <div className='w-full my-[0.75rem] h-[1px] border-[#C6C6C8]'></div>
                                    <div className='flex flex items-center'>
                                        <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                                            <Image alt="" src="/images/document.svg" width={24} height={24} />
                                        </div>
                                        <p className='text-[#747067] text-[1rem] leading-[1.6875rem]'> Contact </p>
                                    </div>
                                    <div className='w-full my-[0.75rem] h-[1px] border-[#C6C6C8]'></div>
                                    <div className='flex flex items-center'>
                                        <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                                            <Image alt="" src="/images/sign-out.svg" width={24} height={24} />
                                        </div>
                                        <p className='text-[#747067] text-[1rem] leading-[1.6875rem]'> Sign out </p>
                                    </div>
                                </div> :
                                <div className="-mt-[1px] bg-white rounded-tr-[0px] rounded-[8px] flex flex-col p-[1.125rem] border-[1px] border-[#D4D4D4] drop-shadow z-[20]">
                                    <Link href="/auth/signin">
                                        <a target="_self" className='flex flex items-center'>
                                            <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                                                <Image alt="" src="/images/sign-in.svg" width={24} height={24} />
                                            </div>
                                            <p className='text-[#747067] text-[1rem] leading-[1.6875rem]'> Sign in </p>
                                        </a>
                                    </Link>
                                    <div className='w-full my-[0.75rem] h-[1px] border-[#C6C6C8]'></div>
                                    <Link href="/auth/signup">
                                        <a target="_self" className='flex flex items-center'>
                                            <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                                                <Image alt="" src="/images/avatar.svg" width={24} height={24} />
                                            </div>
                                            <p className='text-[#747067] text-[1rem] leading-[1.6875rem]'> Create account </p>
                                        </a>
                                    </Link>
                                </div>
                            }

                        </div>
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
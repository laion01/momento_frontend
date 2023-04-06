import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import { faBars} from '@fortawesome/free-solid-svg-icons'
import Button from './Button';
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Header() {
    const [ isDropDown, openDropdown ] = useState(false);
    const [ isShadow, showShadow] = useState(false);
    useEffect(() => {
        if(window) {
            window.onscroll = function() {
                checkScroll();
            }
        }
    }, [])

    const checkScroll = function() {
        if(window.pageYOffset > window.innerHeight * 0.75) {
            showShadow(true);
        } else {
            showShadow(false);
        }
    }

    return (
        <div className="z-30 fixed w-full top-0 flex justify-between items-center transition-all duration-500 bg-white h-[4.5rem] px-[40px]">
            {/* <div className=' flex justify-between'> */}
                <div className='h-[40px] flex'>
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
                </div>
                <div className='flex justify-center items-center'>
                    <Navbar className="hidden lg:block"/>
                    <button className='w-[40px] h-[40px] mx-[20px]'>
                        <Image alt='' src='/images/bag.png' width={40} height={40}/>
                    </button>
                    <button className='w-[40px] h-[40px] mx-[20px]'>
                        <Image alt='' src='/images/avatar.png' width={40} height={40}/>
                    </button>
                    
                    {/* <ConnectWallet className='bg-[#AAEFFF] border-[#400077] border-[2px] rounded-[10px] '
                        colorMode="dark"
                        accentColor="#AAEFFF"
                    /> */}
                </div>
            {/* </div> */}
        </div>
    )
}
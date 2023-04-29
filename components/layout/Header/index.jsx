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
import { setColors, setMetals, setMyBag, setProducts, setLockets, setProductTypes } from 'store/slices/utilSlice';
import Button from 'components/utils/Buttons/Button';
import AUTH_API from 'api/Auth';
import { login } from 'store/slices/authSlice';
import UTILS_API from 'api/Util';

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
                id: 1, 
                name: "Necklace", 
            }, 
            { 
                id: 2, 
                name: "Ring", 
            },
        ]}))

        load();
    }, [])

    const load = async () => {
        const metals = await UTILS_API.getMetals();
        dispatch(setMetals({ metals: metals.rows }))

        const colors = await UTILS_API.getColors();
        dispatch(setColors({ colors: colors.rows }))

        const lockets = await UTILS_API.getLockets();
        dispatch(setLockets({ lockets: lockets.rows }))
    }

    useEffect(() => {
        tryAuthToken()
    }, [])

    const tryAuthToken = async () => {
        try {
            const token = localStorage.getItem('token')
            if(token) {
                const { data } = await AUTH_API.me(token);

                dispatch(login({
                    logined: true,
                    fullname: `${data.first_name} ${data.last_name}`,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    phone: data.phone,
                    email: `${data.email}`,
                    avatar: data.avatar,
                    user_id: data.id,
                    token: data.token,
                    address: '',
                    billingAddress: '',
                    role: data.role,
                }))

            }
        } catch (e) {
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
                        <Image alt='' src='/images/bag.png' width={40} height={40} />
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
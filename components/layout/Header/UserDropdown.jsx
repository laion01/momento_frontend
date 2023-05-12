import { useRouter } from "next/router"
import { useAuth } from "store/hook";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faCartPlus, faShoppingBag, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { logout } from "store/slices/authSlice";
import AUTH_API from "api/Auth";

export default function UserDropdown({onCloseMenu}) {
    const dispatch = useDispatch();
    const { logined, role } = useAuth();
    const router = useRouter();

    return (
        <div className='absolute top-[60px] right-[0.5rem] flex flex-col min-w-[280px]'>
            <div className='fixed top-0 left-0 min-w-[100vw] min-h-[100vh] z-10' onClick={() => { onCloseMenu() }}></div>
            <div className='flex justify-end overflow-hidden z-30'>
                <div className='h-[13px] overflow-hidden -mr-[1px]'>
                    <Image alt="" src="/images/triangle.svg" width={48} height={40} />
                </div>
            </div>
            {logined ?
                <div className="-mt-[1px] bg-white rounded-tr-[0px] rounded-[8px] flex flex-col p-[1.125rem] border-[1px] border-[#D4D4D4] drop-shadow z-[20]">
                    <button className='flex flex items-center' onClick={() => {
                        router.push({ pathname: "/auth/account" })
                        onCloseMenu()
                    }}>
                        <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                            <Image alt="" src="/images/sign-in.svg" width={24} height={24} />
                        </div>
                        <p className='text-[#747067] text-[1rem] leading-[1.6875rem]'> My Account </p>
                    </button>
                    <div className='w-full my-[0.75rem] h-[1px]'></div>
                    <button className='flex flex items-center'>
                        <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                            <Image alt="" src="/images/document.svg" width={24} height={24} />
                        </div>
                        <p className='text-[#747067] text-[1rem] leading-[1.6875rem]'> Contact </p>
                    </button>
                    <div className='w-full my-[0.75rem] h-[1px]'></div>
                    {role == 3 &&
                    <div className="w-full border-[#C6C6C8] border-t-[1px] border-b-[1px] py-[1rem] mb-[0.875rem] flex flex-col">

                        <button className='flex flex items-center' onClick={() => {
                            onCloseMenu()
                            router.push({ pathname: "/admin/store" })
                        }}>
                            <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                                <Image alt="" src="/images/momento.png" width={24} height={24} />
                            </div>
                            <p className='text-[#747067] text-[1rem] leading-[1.6875rem]'> Manage Lockets </p>
                        </button>
                        <div className='w-full my-[0.75rem] h-[1px]'></div>

                        <button className='flex flex items-center' onClick={() => {
                            onCloseMenu()
                            router.push({ pathname: "/admin/orders" })
                        }}>
                            <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem] text-primary'>
                                {/* <Image alt="" src="/images/momento.png" width={24} height={24} /> */}
                                <FontAwesomeSvgIcon width={24} height={24} icon={faCartShopping} />
                            </div>
                            <p className='text-[#747067] text-[1rem] leading-[1.6875rem]'> Orders </p>
                        </button>
                    </div>
                    }
                    
                    <button className='flex flex items-center' onClick={() => {
                        onCloseMenu()
                        dispatch(logout())
                        AUTH_API.signout()
                        router.push({ pathname: "/auth/signin" })
                    }}>
                        <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                            <Image alt="" src="/images/sign-out.svg" width={24} height={24} />
                        </div>
                        <p className='text-[#747067] text-[1rem] leading-[1.6875rem]'> Sign out </p>
                    </button>
                </div> :
                <div className="-mt-[1px] bg-white rounded-tr-[0px] rounded-[8px] flex flex-col p-[1.125rem] border-[1px] border-[#D4D4D4] drop-shadow z-[20]">
                    <button className='flex flex items-center' onClick={() => {
                        router.push({ pathname: "/auth/signin" })
                        onCloseMenu()
                    }}>
                        <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                            <Image alt="" src="/images/sign-in.svg" width={24} height={24} />
                        </div>
                        <p className='text-[#747067] text-[1rem] leading-[1.6875rem]'> Sign in </p>
                    </button>
                    <div className='w-full my-[0.75rem] h-[1px] border-[#C6C6C8]'></div>

                    <button className='flex flex items-center' onClick={() => {
                        router.push({ pathname: "/auth/signup" })
                        onCloseMenu()
                    }}>
                        <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                            <Image alt="" src="/images/avatar.svg" width={24} height={24} />
                        </div>
                        <p className='text-[#747067] text-[1rem] leading-[1.6875rem]'> Create account </p>
                    </button>
                </div>
            }

        </div>
    )
}
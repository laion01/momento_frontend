import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faAngleDown, faAngleUp, faCartPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image";
import { useEffect, useState } from "react";
import UploadFileDlg from "components/utils/UploadFileDlg";
import Item from "./Item";
import UTILS_API from "api/Util";
import { useRouter } from "next/router";
import { useAuth, useUtil } from "store/hook";
import Button from "components/utils/Buttons/Button";
import { useDispatch } from "react-redux";
import { setOrders } from "store/slices/utilSlice";

export default function OrderAdminView() {
    const dispatch = useDispatch()
    const router = useRouter();
    const { userId } = useAuth();
    const { orders } = useUtil();
    const [ orderOwner, setOrderOwner] = useState(0);
    const [isOpen, openItems] = useState(true);
    const [products, setProducts] = useState([]);
    const [customerName, setCustomerName] = useState('Customer Name');
    const [shippingAddress, setShippingAddress] = useState('xxx...');
    const [orderId, setOrderId] = useState(0);
    const [createdAt, setCreatedAt] = useState();
    const [totalPrice, setTotalPrice] = useState(0);
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [status, setStatus] = useState(2);
    const [user, setUser] = useState({first_name: "", last_name: ""});


    useEffect(() => {
        load();
    }, [router.query])

    const load = async () => {
        if (router.query.id == undefined)
            return ;
        try{
            const data = await UTILS_API.getOrder(router.query.id);

            setCustomerName(`${data.User.first_name} ${data.User.last_name}`)
            const state = JSON.parse(data.shippingAddress.state);
            const country = JSON.parse(data.shippingAddress.country);
            setShippingAddress(`${data.shippingAddress.address}, ${data.shippingAddress.city},  ${state?.abbreviation ? state.abbreviation : state.name },  ${country.value}`)
            setCreatedAt(String(data.createdAt).substring(0, 15).replace("T", " "));
            setOrderId(data.id);
            const tmp = data.SoldProducts;
            const tmpIds = [];
            const ans = [];
            let sp = 0;
            tmp.map((item) => {
                if(!tmpIds.includes(item.productId)) {
                    tmpIds.push(item.productId);
                    ans[item.productId] = {...item, quantity: 1};
                } else {
                    ans[item.productId].quantity ++;
                }
                sp += item.price;
            })
            setSubTotalPrice(sp)
            setTotalPrice(data.totalPrice ? data.totalPrice : sp);
            setProducts([...ans])
            setStatus(data.status);
            setUser(data.User);
        } catch (e) {
            
        }
    }

    useEffect(() => {
        orders.map((order) => {
            if(order.id == orderId) {
                setViewed()
            }
        })
    }, [orderId, orders])

    const setViewed = async () => {
        const orderData = await UTILS_API.setOrderViewed(orderId);
        dispatch(setOrders({orders: orderData.rows}));
    }

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex flex-col items-center justify-center pt-[20px] pb-[8rem]">
            <div className="container grow flex flex-col justify-center items-center relative">
                <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] leading-[3.75rem] text-[#AC8118] text-center font-bold mt-[100px] mb-[1rem]">
                    { status == 1 ? "Order placed successfully" : "Order is Pending now."} 
                </h2>
                <p className="text-[1.25rem] font-light leading-[2.25rem] text-[#747067] mb-[2.5rem]"> Order Created by <span className="font-bold">{user.first_name} {user.last_name}</span> </p>
                <p className="text-[1.125rem] font-bold leading-[2.25rem] text-[#747067] mb-[2.5rem] text-center"> 
                    Shipping to {customerName}, {shippingAddress} <br/>
                    Estimated delivery: June 23, 2021 
                </p>
                <div className="bg-white flex justify-between p-[1.25rem] mb-[2rem] shadow min-w-[540px] mb-[2.5rem] rounded-[0.5rem]">
                    <p className="text-[1rem] text-[#747067] text-center grow"> <span className="font-bold"> Order Number: </span> #{orderId} </p>
                    <div className="w-[1px] bg-[#747067] h-full"></div>
                    <p className="text-[1rem] text-[#747067] text-center grow"><span className="font-bold"> Order Date: </span> {createdAt} </p>
                </div>
                <div className="bg-white flex flex-col p-[1.5rem] h-fit mx-[50px] mb-[2rem] shadow-md min-w-[540px]">
                    <div className="flex justify-between items-center mb-[1.5rem] pb-[1.5rem] border-b-[1px] border-b-[#D4D4D4]">
                        <p className="text-primary font-bold text-[1.125rem] ml-[10px]"> Your order Summary 
                            { products.length > 2 && 
                                <span> ({products.length} items) </span> 
                            }
                        </p>
                        <button className="text-[#747067] flex justify-center items-center" onClick={() => {openItems(!isOpen)}}>
                            <FontAwesomeSvgIcon icon={isOpen? faAngleUp : faAngleDown} width={20} height={20} className="text-[#747067]" />
                        </button>
                    </div>
                    { isOpen &&
                        <div className="flex flex-col">
                            { products.filter((p) => {return !!p}).map((item, index) => 
                                <Item key={index} quantity={item.quantity} name={item.Product.Locket.name} metal={item.Product.Metal.name} color={item.Product.Color.name} colorImage={item.Product.Color.image} price={item.price} image={item.Product?.Files[0]}/>
                            )}
                        </div>
                    }
                    <div className="flex justify-between text-[0.875rem] text-[#747067] mb-[0.5rem] leading-[1.3125rem]">
                        <p> Subtotal </p>
                        <p className="font-bold"> $ {subTotalPrice} </p>
                    </div>
                    <div className="flex justify-between text-[0.875rem] text-[#747067] mb-[0.5rem] leading-[1.3125rem]">
                        <p> Shipping </p>
                        <p className="font-bold"> $ 5.00 </p>
                    </div>
                    <div className="flex justify-between text-[0.875rem] text-[#747067] mb-[0.5rem] leading-[1.3125rem]">
                        <p> Promotion Applied (1) </p>
                        <p className="font-bold"> -$ 30.00 </p>
                    </div>
                    <div className="flex justify-between text-[0.875rem] text-[#747067] mb-[0.5rem] leading-[1.3125rem]">
                        <p> Estimated tax </p>
                        <p className="font-bold"> $ 40.25 </p>
                    </div>
                    <div className="flex justify-between items-center mb-[0.25rem] text-[1.125rem] font-bold leading-[1.6875rem] text-[#747067] mt-[1.5rem] border-t-[1px] border-b-[#D4D4D4] pt-[1.5rem]">
                        <p> Total </p>
                        <p> ${totalPrice} </p>
                    </div>
                </div>
            </div>
            { status == 0 && 
                <div className="flex">
                    <button className="mx-[0.25rem] h-[3rem] rounded-full bg-[#e0e0e0] text-primary hover:px-[1.675rem] px-[1.5rem] text-black text-[1rem] hover:shadow transition-all duration-300 flex items-center" onClick={(e) => { router.push('/lockets')}}> 
                        <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                            {/* <Image alt="" src="/images/momento.png" width={24} height={24} /> */}
                            <FontAwesomeSvgIcon width={24} height={24} icon={faTrash} />
                        </div>
                        <p className="font-bold"> Cancel Order </p>
                    </button>
                    {/* <Button label="Proceed to Checkout" onClick={() => { router.push("/checkout")}}/> */}
                </div>
            }
        </div>
    )
}


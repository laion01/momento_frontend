import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import UTILS_API from "api/Util";
import { useAuth } from "store/hook";

export default function Orders({}) {
    const { userId } = useAuth()
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        load();
    }, []);

    const load = async() => {
        const res = await UTILS_API.getOrders(userId);
        console.log("___ orders", orders);

        setOrders(res);
    }

    return (
        <div className="bg-white rounded-[1rem] px-[1.125rem] py-[1rem] flex flex-col h-fit grow">
            <h6 className="text-[1.5rem] leading-[2.25rem] font-bold text-primary mb-[1rem]"> Orders </h6>

            <div className="flex flex-col px-[0.5625rem] w-full overflow-x-auto">
                <table>
                    <thead>
                        <tr className="px-[30px] text-[1rem] leading-[1.6875rem] h-[5rem] border-b-[1px] border-[#D4D4D4] flex items-center">
                            <th className="text-left text-[#9E785D] text-[0.875rem] leading-[1.375] w-[80px] text-center"> Order ID </th>
                            <th className="text-left text-[#9E785D] text-[0.875rem] leading-[1.375] w-[80px]"> Items </th>
                            <th className="text-left text-[#9E785D] text-[1rem] leading-[1.375] w-[120px] font-medium"> Total Price </th>
                            <th className="text-left text-[#9E785D] text-[1rem] leading-[1.375] w-[240px] font-medium"> Created </th>
                            <th className="text-left text-[#9E785D] text-[1rem] leading-[1.375] w-[280px] grow font-medium"> Payment Id </th>

                            <th className="text-left text-[#9E785D] text-[0.875rem] leading-[1.375] w-[120px]">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { orders.map((item, index) =>
                            <OrderItem data={item} key={index}/>
                        )}
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}
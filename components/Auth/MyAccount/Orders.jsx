import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import UTILS_API from "api/Util";

export default function Orders({}) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        load();
    }, []);

    const load = async() => {
        const res = await UTILS_API.getOrders();
        console.log("___ orders", orders);

        setOrders(res);
    }

    return (
        <div className="bg-white rounded-[1rem] px-[1.125rem] py-[1rem] flex flex-col h-fit grow">
            <h6 className="text-[1.5rem] leading-[2.25rem] font-bold text-primary mb-[1rem]"> Orders </h6>

            <div className="flex flex-col px-[0.5625rem] w-full overflow-x-auto">
                <table>
                    <thead>
                        <tr className="px-[30px] text-[1rem] leading-[1.6875rem] h-[5rem] my-[0.5rem] border-b-[1px] border-[#D4D4D4] flex items-center">
                            <th className="text-left text-[#9E785D] text-[0.875rem] leading-[1.375] w-[120px] text- "> Order ID </th>
                            <th className="text-left text-[#9E785D] text-[0.875rem] leading-[1.375] w-[120px] text-center"> Status </th>
                            <th className="text-left text-[#9E785D] text-[0.875rem] leading-[1.375] w-[80px]"> Amount </th>
                            <th className="text-left text-[#9E785D] text-[1rem] leading-[1.375] w-[120px] font-medium"> Total </th>
                            <th className="text-left text-[#9E785D] text-[0.875rem] leading-[1.375] w-[120px]">
                                Actions
                            </th>
                            <th className="flex justify-center items-center w-[7.5rem]">
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
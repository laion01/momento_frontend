import { useState, useEffect } from "react";
import UTILS_API from "api/Util";
import OrderItem from "./OrderItem";

export default function OrderTable() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        load();
    }, []);

    const load = async() => {
        const res = await UTILS_API.getOrders(false);
        console.log("___ orders", orders);

        setOrders(res);
    }
    return (
        <div className="mx-[20px] md:mx-[2.5rem] bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container grow flex flex-col justify-center items-center relative px-[2rem]">
                <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-[#AC8118] text-center mt-[100px]">
                    Order Table
                </h2>
                <div className="mx-[1rem] mb-[120px] bg-white p-[2rem] rounded-[0.5rem] w-full">
                <table className="w-full">
                    <thead>
                        <tr className="px-[30px] text-[1rem] leading-[1.6875rem] h-[5rem] border-b-[1px] border-[#D4D4D4] flex items-center">
                            <th className="text-left text-[#9E785D] text-[0.875rem] leading-[1.375] w-[80px] text-center"> Order ID </th>
                            <th className="text-[#9E785D] leading-[4rem] w-[200px] px-[0.875rem] text-left"> Buyer </th>
                            <th className="text-left text-[#9E785D] text-[0.875rem] leading-[1.375] w-[80px] text-center"> Items </th>
                            <th className="text-left text-[#9E785D] text-[1rem] leading-[1.375] w-[120px] text-center font-medium"> Total Price </th>
                            <th className="text-left text-[#9E785D] text-[1rem] leading-[1.375] w-[300px] grow font-medium"> Shipping Address </th>
                            <th className="text-left text-[#9E785D] text-[1rem] leading-[1.375] w-[300px] grow font-medium"> Created </th>
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
        </div>
    )
}

const orders = [
    {
        id: 79383,
        products: [
            {
                id: 124,
                name: "Pearl Flower",
                image: '/images/jewelry.png',
                metal: "Silver",
                color: "Red",
                price: 125.0,
                quantity: 3,
                totalPrice: 350,
            }, 
            {
                id: 125,
                name: "Pearl Flower",
                image: '/images/jewelry.png',
                metal: "Silver",
                color: "Red",
                price: 125.0,
                quantity: 3,
                totalPrice: 350,
            }, 
            {
                id: 126,
                name: "Pearl Flower",
                image: '/images/jewelry.png',
                metal: "Silver",
                color: "Red",
                price: 125.0,
                quantity: 3,
                totalPrice: 350,
            }
        ],
        username: "Mark Newman",
        subTotal: 122.50,
        promotion: 10.00,
        tax: 35.00,
        total: 142.5,
        upsId: 213654641,
        address: "351 Markham street, Toronto On Canada",
        status: 1,
    }, 
    {
        id: 79384,
        products: [
            {
                id: 124,
                name: "Pearl Flower",
                image: '/images/jewelry.png',
                metal: "Silver",
                color: "Red",
                price: 125.0,
                quantity: 3,
                totalPrice: 350,
            }, 
            {
                id: 125,
                name: "Pearl Flower",
                image: '/images/jewelry.png',
                metal: "Silver",
                color: "Red",
                price: 125.0,
                quantity: 3,
                totalPrice: 350,
            }, 
            {
                id: 126,
                name: "Pearl Flower",
                image: '/images/jewelry.png',
                metal: "Silver",
                color: "Red",
                price: 125.0,
                quantity: 3,
                totalPrice: 350,
            }
        ],
        username: "Mark Newman",
        subTotal: 122.50,
        promotion: 10.00,
        tax: 35.00,
        total: 142.5,
        upsId: 213654641,
        address: "351 Markham street, Toronto On Canada",
        status: 1,
    }, 
    {
        id: 79385,
        products: [
            {
                id: 124,
                name: "Pearl Flower",
                image: '/images/jewelry.png',
                metal: "Silver",
                color: "Red",
                price: 125.0,
                quantity: 3,
                totalPrice: 350,
            }, 
            {
                id: 125,
                name: "Pearl Flower",
                image: '/images/jewelry.png',
                metal: "Silver",
                color: "Red",
                price: 125.0,
                quantity: 3,
                totalPrice: 350,
            }, 
            {
                id: 126,
                name: "Pearl Flower",
                image: '/images/jewelry.png',
                metal: "Silver",
                color: "Red",
                price: 125.0,
                quantity: 3,
                totalPrice: 350,
            }
        ],
        username: "Mark Newman",
        subTotal: 122.50,
        promotion: 10.00,
        tax: 35.00,
        total: 142.5,
        upsId: 213654641,
        address: "351 Markham street, Toronto On Canada",
        status: 1,
    }
]
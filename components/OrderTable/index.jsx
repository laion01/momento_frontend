import Image from "next/image";
import { useState } from "react"
import Item from "./Item";
export default function OrderTable() {
    const [orderList, setOrderList] = useState(orders);

    return (
        <div className="mx-[20px] md:mx-[2.5rem] bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container grow flex flex-col justify-center items-center relative px-[2rem]">
                <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-[#AC8118] text-center mt-[100px]">
                    Order Table
                </h2>
                <div className="mx-[1rem] mb-[120px] bg-white p-[2rem] rounded-[0.5rem] w-full">
                    <div className="text-[0.75rem] flex flex-col overflow-x-auto min-h-[50vh]">
                        <div className="border-b-[2px] flex w-fit font-bold text-[0.875rem]">
                            <div className="h-[2.5rem] w-[2.5rem] text-center"> No </div>
                            <div className="h-[2.5rem] w-[80px] text-left"> Order ID </div>
                            <div className="h-[2.5rem] w-[160px] text-left"> Buyer </div>
                            <div className="h-[2.5rem] w-[200px] text-left"> Products </div>
                            <div className="h-[2.5rem] w-[100px] text-center"> Sub Total </div>
                            <div className="h-[2.5rem] w-[80px] text-center"> Promotion </div>
                            <div className="h-[2.5rem] w-[100px] text-center"> Tax </div>
                            <div className="h-[2.5rem] w-[120px] text-center"> Total Price</div>
                            <div className="h-[2.5rem] w-[120px] text-center"> UPS ID </div>
                            <div className="h-[2.5rem] w-[400px] text-left"> Shipping Address </div>
                            <div className="h-[2.5rem] w-[100px] text-center"> Status </div>
                        </div>
                        { orderList.map((item, index) => 
                            <Item key={index} data={item} index={index}/>
                        )}
                    </div>
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
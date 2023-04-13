
import { useState } from "react";
import UploadFileDlg from "components/utils/UploadFileDlg";
import OrderItem from "components/utils/OrderItem";



export default function OrderList() {

    const [isOpenDlg, openDlg] = useState(false);

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container grow flex flex-col justify-center items-center relative pb-[8rem]">
                <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[6.75rem] text-[#AC8118] text-center mt-[100px] mb-[2.5rem]">
                    Your Orders
                </h2>
                { orders.map((item, index) => 
                    <OrderItem key={index} data={item} />
                )}
            </div>
            { isOpenDlg &&
                <UploadFileDlg onClose={openDlg}/>
            }
        </div>
    )
}

const orders = [
    {
        id: 315685413, created: "October 22, 2021", address: "Customer Name, 0000 Address St, City, FL 33327",
        items: [
            {
                id: 123,
                name: "Momento® Locket Pearl Flower",
                image: "/images/lockets/locket1.png",
                price: "300.00",
                metal: 1,
                color: 3,
                quantity: 1,
            }, {
                id: 124,
                name: "Momento® Locket Pearl Flower",
                image: "/images/lockets/locket2.png",
                price: "300.00",
                metal: 1,
                color: 2,
                quantity: 3,
            }, {
                id: 124,
                name: "Momento® Locket Pearl Flower",
                image: "/images/lockets/locket3.png",
                price: "300.00",
                metal: 1,
                color: 2,
                quantity: 3,
            }, 
        ]
    }, {
        id: 315685414, created: "October 22, 2021", address: "Customer Name, 0000 Address St, City, FL 33327",
        items: [
            {
                id: 123,
                name: "Momento® Locket Pearl Flower",
                image: "/images/lockets/locket4.png",
                price: "300.00",
                metal: 1,
                color: 3,
                quantity: 1,
            }, {
                id: 124,
                name: "Momento® Locket Pearl Flower",
                image: "/images/lockets/locket2.png",
                price: "300.00",
                metal: 1,
                color: 2,
                quantity: 3,
            },
        ]
    }, {
        id: 315685415, created: "October 22, 2021", address: "Customer Name, 0000 Address St, City, FL 33327",
        items: [
            {
                id: 123,
                name: "Momento® Locket Pearl Flower",
                image: "/images/lockets/locket1.png",
                price: "300.00",
                metal: 1,
                color: 3,
                quantity: 1,
            }, {
                id: 124,
                name: "Momento® Locket Pearl Flower",
                image: "/images/lockets/locket2.png",
                price: "300.00",
                metal: 1,
                color: 2,
                quantity: 3,
            }, {
                id: 124,
                name: "Momento® Locket Pearl Flower",
                image: "/images/lockets/locket3.png",
                price: "300.00",
                metal: 1,
                color: 2,
                quantity: 3,
            }, 
        ]
    }, {
        id: 315685416, created: "October 22, 2021", address: "Customer Name, 0000 Address St, City, FL 33327",
        items: [
            {
                id: 123,
                name: "Momento® Locket Pearl Flower",
                image: "/images/lockets/locket1.png",
                price: "300.00",
                metal: 1,
                color: 3,
                quantity: 1,
            }, {
                id: 124,
                name: "Momento® Locket Pearl Flower",
                image: "/images/lockets/locket2.png",
                price: "300.00",
                metal: 1,
                color: 2,
                quantity: 3,
            }, {
                id: 124,
                name: "Momento® Locket Pearl Flower",
                image: "/images/lockets/locket3.png",
                price: "300.00",
                metal: 1,
                color: 2,
                quantity: 3,
            }, 
        ]
    }, 
]
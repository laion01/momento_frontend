import Image from "next/image";
import { useState } from "react"
import Item from "./Item";
import ProductItem from "./ProductItem";
import ColorItem from "./ColorItem";
import MetalItem from "./MetalItem";
import ProductModal from "components/utils/ProductModal";
import ColorModal from "components/utils/ColorModal";
import MetalModal from "components/utils/MetalModal";
import { useUtil } from "store/hook";

export default function StoreList() {
    const { products, metals, colors, productTypes } = useUtil();
    const [orderList, setOrderList] = useState(orders);
    const [isProductModal, openProductModal] = useState(0);
    const [selectedProduct, selectProduct] = useState({});
    const [isMetalModal, openMetalModal] = useState(0);
    const [selectedMetal, selectMetal] = useState({});
    const [isColorModal, openColorModal] = useState(0);
    const [selectedColor, selectColor] = useState({});

    const getTypeName = (t) => {
        for(let i = 0 ;i < productTypes.length; i++) {
            if(productTypes[i].id == t)
                return productTypes[i].name
        }
    }

    return (
        <div className="mx-[20px] md:mx-[2.5rem] bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container grow flex flex-col justify-center items-center relative px-[2rem]">
                <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-[#AC8118] text-center mt-[100px]">
                    Products store
                </h2>
                <div className="w-full flex">
                    <div className="flex flex-col w-fit">
                        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto mx-[0.5rem] mb-[2rem] bg-white p-[1rem] rounded-[0.5rem] text-[0.75rem] flex flex-col min-h-[50vh] w-fit">
                            <div className="h-[2.5rem] items-center flex justify-between w-fit font-bold text-[0.875rem] w-full">
                                <p className="text-[1.25rem] text-primary font-bold"> Products </p>
                                <button className="" onClick={() => {openProductModal(true)}}> + Add </button>
                            </div>
                            <div className="h-[2.5rem] items-center border-b-[2px] flex w-fit font-bold text-[0.875rem]">
                                <div className="min-w-[2.5rem] text-center"> No </div>
                                <div className="min-w-[200px] text-left"> Name </div>
                                <div className="min-w-[80px] text-right"> Type </div>
                            </div>
                            { products.map((product, index) =>
                                <ProductItem key={index} index={index} onClick={() => { openProductModal(2), selectProduct(products[index])}} data={product} typeName={getTypeName(product.type)}/>
                            )}
                        </div>
                        <div className="w-auto max-h-[calc(100vh-6rem)] overflow-y-auto mx-[0.5rem] mb-[2rem] bg-white p-[1rem] rounded-[0.5rem] text-[0.75rem] flex flex-col min-h-[50vh] w-fit">
                            <div className="h-[2.5rem] items-center flex justify-between w-fit font-bold text-[0.875rem] w-full">
                                <p className="text-[1.25rem] text-primary font-bold"> Metal </p>
                                <button className=""  onClick={() => {openMetalModal(true)}}> + Add </button>
                            </div>
                            <div className="h-[2.5rem] items-center border-b-[2px] flex w-full font-bold text-[0.875rem]">
                                <div className="min-w-[2.5rem] text-center"> No </div>
                                <div className="min-w-[200px] text-left"> Metal </div>
                            </div>
                            { metals.map((metal, index) =>
                                <MetalItem key={index} index={index} data={metal} onClick={() => {openMetalModal(2), selectMetal(metal)}}/>
                            )}
                        </div>
                        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto mx-[0.5rem] mb-[2rem] bg-white p-[1rem] rounded-[0.5rem] text-[0.75rem] flex flex-col min-h-[50vh] w-fit">
                            <div className="h-[2.5rem] items-center flex justify-between w-fit font-bold text-[0.875rem] w-full">
                                <p className="text-[1.25rem] text-primary font-bold"> Colors </p>
                                <button className="" onClick={() => {openColorModal(1)}}> + Add </button>
                            </div>
                            <div className="h-[2.5rem] items-center border-b-[2px] flex w-fit font-bold text-[0.875rem]">
                                <div className="min-w-[2.5rem] text-center"> No </div>
                                <div className="min-w-[200px] text-left"> Color </div>
                                <div className="min-w-[60px] text-center"> Image </div>
                            </div>
                            { colors.map((color, index) =>
                                <ColorItem key={index} index={index} onClick={() => { openColorModal(2), selectColor(color) }} data={color}/>
                            )}
                            </div>
                    </div>
                    
                    <div className="h-fit min-h-[calc(100vh-5.5rem)] mx-[0.5rem] mb-[120px] bg-white p-[1rem] rounded-[0.5rem] text-[0.75rem] flex flex-col overflow-x-auto min-h-[50vh] w-full overflow-x-auto">
                        <div className="border-b-[2px] flex w-fit font-bold text-[0.875rem] w-fit">
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
            { isProductModal != 0 &&
                <ProductModal onClose={() => {openProductModal(0)}} type={isProductModal} data={selectedProduct}/>
            }
            { isMetalModal != 0 &&
                <MetalModal onClose={() => {openMetalModal(0)}} type={isMetalModal} data={selectedMetal}/>
            }
            { isColorModal != 0 &&
                <ColorModal onClose={() => {openColorModal(0)}} type={isColorModal} data={selectedColor}/>
            }
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
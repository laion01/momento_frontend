import Image from "next/image";
import { useEffect, useState } from "react"
import Item from "./Item";
import LocketItem from "./LocketItem";
import ColorItem from "./ColorItem";
import MetalItem from "./MetalItem";
import ProductModal from "components/utils/ProductModal";
import LocketModal from "components/utils/LocketModal";
import ColorModal from "components/utils/ColorModal";
import MetalModal from "components/utils/MetalModal";
import { useUtil } from "store/hook";
import UTILS_API from "api/Util";
import { setProducts } from "store/slices/utilSlice";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import GalleryPopup from "components/GalleryPopup";


export default function StoreList() {
    const dispatch = useDispatch();
    const { lockets, metals, colors, productTypes, products } = useUtil();
    const [isProductModal, openProductModal] = useState(0);
    const [isLocketModal, openLocketModal] = useState(0);
    const [selectedProduct, selectProduct] = useState({});
    const [selectedLocket, selectLocket] = useState({});
    const [isMetalModal, openMetalModal] = useState(0);
    const [selectedMetal, selectMetal] = useState({});
    const [isColorModal, openColorModal] = useState(0);
    const [isImageModal, openImageModal] = useState(0);
    const [selectedColor, selectColor] = useState({});

    const getTypeName = (t) => {
        for(let i = 0 ;i < productTypes.length; i++) {
            if(productTypes[i].id == t)
                return productTypes[i].name
        }
    }

    const getProduct = (t) => {
        for(let i = 0 ;i < products.length; i++) {
            if(products[i].id == t)
                return products[i]
        }
    }

    const getMetal = (t) => {
        for(let i = 0 ;i < metals.length; i++) {
            if(metals[i].id == t)
                return metals[i]
        }
    }

    const getColor = (t) => {
        for(let i = 0 ;i < colors.length; i++) {
            if(colors[i].id == t)
                return colors[i]
        }
    }

    useEffect(() => {
        load()
    }, [])

    const load = async () => {
        const p = await UTILS_API.getProducts();
        dispatch(setProducts({products: p.rows}));
    }

    return (
        <div className="mx-[20px] md:mx-[2.5rem] bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container grow flex flex-col justify-center items-center relative px-[2rem]">
                {/* <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-[#AC8118] text-center mt-[100px]">
                    Products store
                </h2> */}
                <div className="w-full flex mt-[100px]">
                    <div className="flex flex-col w-fit">
                        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto mx-[0.5rem] mb-[2rem] bg-white p-[1rem] rounded-[0.5rem] text-[0.75rem] flex flex-col min-h-[50vh] w-fit">
                            <div className="h-[2.5rem] items-center flex justify-between font-bold text-[0.875rem] w-full">
                                <p className="text-[1.25rem] text-primary font-bold"> Lockets </p>
                                <button className="bg-primary px-[1rem] py-[0.25rem] text-white rounded-[0.25rem]" onClick={() => {openLocketModal(1)}}> + Add </button>
                            </div>
                            <div className="h-[2.5rem] items-center border-b-[2px] flex w-fit font-bold text-[0.875rem]">
                                <div className="min-w-[2.5rem] text-center"> No </div>
                                <div className="min-w-[200px] text-left"> Locket Name </div>
                                <div className="min-w-[80px] text-right"> Type </div>
                            </div>
                            { lockets.map((locket, index) =>
                                <LocketItem key={index+1} index={index} onClick={() => { openLocketModal(2), selectLocket(locket)}} data={locket} typeName={getTypeName(locket.type)}/>
                            )}
                        </div>
                        <div className="w-auto max-h-[calc(100vh-6rem)] overflow-y-auto mx-[0.5rem] mb-[2rem] bg-white p-[1rem] rounded-[0.5rem] text-[0.75rem] flex flex-col min-h-[50vh]">
                            <div className="h-[2.5rem] items-center flex justify-between font-bold text-[0.875rem] w-full">
                                <p className="text-[1.25rem] text-primary font-bold"> Metal </p>
                                <button className="bg-primary px-[1rem] py-[0.25rem] text-white rounded-[0.25rem]"  onClick={() => {openMetalModal(true)}}> + Add </button>
                            </div>
                            <div className="h-[2.5rem] items-center border-b-[2px] flex w-full font-bold text-[0.875rem]">
                                <div className="min-w-[2.5rem] text-center"> No </div>
                                <div className="min-w-[200px] text-left"> Metal </div>
                            </div>
                            { metals.map((metal, index) =>
                                <MetalItem key={index+1} index={index} data={metal} onClick={() => {openMetalModal(2), selectMetal(metal)}}/>
                            )}
                        </div>
                        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto mx-[0.5rem] mb-[2rem] bg-white p-[1rem] rounded-[0.5rem] text-[0.75rem] flex flex-col min-h-[50vh]">
                            <div className="h-[2.5rem] items-center flex justify-between w-fit font-bold text-[0.875rem] w-full">
                                <p className="text-[1.25rem] text-primary font-bold"> Colors </p>
                                <button className="bg-primary px-[1rem] py-[0.25rem] text-white rounded-[0.25rem]" onClick={() => {openColorModal(1)}}> + Add </button>
                            </div>
                            <div className="h-[2.5rem] items-center border-b-[2px] flex font-bold text-[0.875rem]">
                                <div className="min-w-[2.5rem] text-center"> No </div>
                                <div className="min-w-[200px] grow text-left"> Color </div>
                                <div className="min-w-[60px] text-center"> Image </div>
                            </div>
                            { colors.map((color, index) =>
                                <ColorItem key={index+1} index={index} onClick={() => { openColorModal(2), selectColor(color) }} data={color}/>
                            )}
                        </div>
                    </div>
                    <div className="h-fit min-h-[calc(100vh-5.5rem)] mx-[0.5rem] mb-[120px] bg-white p-[1rem] rounded-[0.5rem] text-[0.75rem] flex flex-col grow">
                        <div className="h-[2.5rem] items-center flex justify-between w-fit font-bold text-[0.875rem] w-full mb-[1rem]">
                            <p className="text-[1.25rem] text-primary font-bold"> Products </p>
                            <button className="bg-primary px-[1rem] py-[0.5rem] text-white rounded-[0.25rem]" onClick={() => {openProductModal(true)}}> + Add </button>
                        </div>
                        <div className="flex flex-col overflow-x-auto">
                            <div className="border-b-[2px] flex w-fit font-bold text-[0.875rem] w-full">
                                <p className="h-[2.5rem] min-w-[2.5rem] text-center"> No </p>
                                {/* <p className="h-[2.5rem] min-w-[60px] text-center"> PID </p> */}
                                <p className="h-[2.5rem] min-w-[8rem] text-left"> Locket name </p>
                                <p className="h-[2.5rem] min-w-[6rem] text-center"> Type </p>
                                <p className="h-[2.5rem] min-w-[6rem] text-center"> Metal </p>
                                <p className="h-[2.5rem] min-w-[6rem] text-left pl-[1.5rem]"> Color </p>
                                <p className="h-[2.5rem] min-w-[6rem] text-center"> Price </p>
                                <p className="h-[2.5rem] min-w-[6rem] text-center"> Amount </p>
                                <p className="h-[2.5rem] min-w-[6rem] text-left"> Images </p>
                                <div className="grow"></div>
                                <p className="h-[2.5rem] text-left"> Action </p>
                            </div>
                            { products.map((item, index) => 
                                <Item key={`${item.id}_${item.amount}`} data={item} index={index+1} onClickImages={() => {openImageModal(1), selectProduct(item)}} onClick={() => { openProductModal(2), selectProduct(item) }} />
                            )}
                        </div>
                        
                    </div>
                </div>
            </div>
            { isProductModal != 0 &&
                <ProductModal onClose={() => {openProductModal(0)}} type={isProductModal} data={selectedProduct}/>
            }
            { isLocketModal != 0 &&
                <LocketModal onClose={() => {openLocketModal(0)}} type={isLocketModal} data={selectedLocket}/>
            }
            { isMetalModal != 0 &&
                <MetalModal onClose={() => {openMetalModal(0)}} type={isMetalModal} data={selectedMetal}/>
            }
            { isColorModal != 0 &&
                <ColorModal onClose={() => {openColorModal(0)}} type={isColorModal} data={selectedColor}/>
            }
            { isImageModal &&
                <GalleryPopup onClose={() => {openImageModal(0)}} data={selectedProduct}/>
            }
        </div>
    )
}
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import LocketItem from "components/utils/LocketItem/Item";
import LocketViewer from "./LocketViewer"
import Image from "next/image";

const categories=['Silver', 'Yellow Gold'];
const selectedCat=1;
const colorItems=[1,2,3,4,5,6]
const selectedColor=1
const colors = [
    {}, { 
        image: "/images/colors/color_1.svg",
        name: "",
    }, { 
        image: "/images/colors/color_2.svg",
        name: "",
    }, { 
        image: "/images/colors/color_3.svg",
        name: "",
    }, { 
        image: "/images/colors/color_4.svg",
        name: "",
    }, { 
        image: "/images/colors/color_5.svg",
        name: "",
    }, { 
        image: "/images/colors/color_6.svg",
        name: "",
    }, {}, {}, {}, {}
    , { 
        image: "/images/colors/color_11.svg",
        name: "",
    }, { 
        image: "/images/colors/color_12.svg",
        name: "",
    }, { 
        image: "/images/colors/color_13.svg",
        name: "",
    }, { 
        image: "/images/colors/color_14.svg",
        name: "",
    }, { 
        image: "/images/colors/color_15.svg",
        name: "",
    }, { 
        image: "/images/colors/color_16.svg",
        name: "",
    }, {}, {}, {}
]



export default function Locket() {
    return (
        <div className="mx-[20px] md:mx-[40px] w-full bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container grow flex flex-col justify-center items-center relative">
                <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[6.75rem] text-[#AC8118] text-center mt-[100px]">
                    Momento® Locket Pearl Flower
                </h2>
                <p className="text-[1.5rem] leading-[2.25rem] text-center text-[#747067] leading-[2.25rem] mb-[3rem]"> 
                    By Galatea Jewelry by Artist
                </p>
                <div className="flex flex-col md:flex-row justify-center mb-[3rem]">
                    <LocketViewer images={['/images/jewelry.png', '/images/album3.jpg', '/images/album1.jpg', '/images/logo.png']}/>
                    
                    <div className="flex flex-col ml-[0px] md:ml-[1rem]">
                        <div className="flex items-center mb-[1.5rem]">
                            <p className="text-[#747067] mr-[16px] text-[1rem]"> Metal </p>
                            <div className="flex justify-center items-center">
                                { categories.map((cat, index) => 
                                <button key={index} className="rounded-full text-[#747067] text-center leading-[1.3125rem] mx-[4px] px-[12px] border-[#747067] h-[33px]" style={{borderWidth: index==selectedCat ? 2 : 0, backgroundColor: index==selectedCat ? "transparent" : "#74706714"}}>
                                    { cat }
                                </button>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center mb-[1.5rem]">
                            <p className="text-[#747067] mr-[16px] text-[1rem]"> Colors </p>
                            <div className="flex justify-center items-center">
                                { colorItems.map((colorIndex, index) => 
                                    // <button key={colorIndex} className="rounded-full mx-[8px] p-[2px] border-[#747067] flex justify-center items-center" style={{borderWidth: colorIndex==selectedColor ? 2 : 0}}>
                                        <div key={colorIndex} className="rounded-full pt-[3px] w-[2.5rem] h-[2.5rem] flex justify-center items-center border-[#747067]" style={{borderWidth: colorIndex==selectedColor ? 2 : 0}}>
                                            <Image alt={colors[colorIndex].name} src={colors[colorIndex].image} width={32} height={32} />
                                        </div>
                                    // </button>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <p className="text-[#747067] mr-[16px] text-[1rem]"> Price: </p>
                            <p className="text-[#747067] mr-[16px] text-[1.25rem] font-bold"> $300 </p>
                        </div>
                        <div className="bg-[#D4D4D4] h-[2px] my-[24px]"/>
                        <div className="flex items-center">
                            <p className="text-[#747067] mr-[16px] text-[1rem]"> Quantity: </p>
                            <button className="w-[2rem] h-[2rem] rounded-full bg-[#996D01] text-white text-[1.5rem] text-center leading-[2rem]"> + </button>
                            <p className="text-[#747067] mx-[16px] text-[1.25rem] font-bold"> 1 </p>
                            <button className="w-[2rem] h-[2rem] rounded-full bg-[#996D01] text-white text-[1.5rem] text-center leading-[2rem]"> - </button>
                            <div className="grow" />
                            <button className="h-[3rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem]"> Add to Bag </button>
                        </div>
                        <div className="bg-[#D4D4D4] h-[2px] my-[24px]"/>
                        <button className="h-[4rem] rounded-full bg-[#996D01] px-[32px] text-white text-[1rem] flex items-center justify-center"> 
                            <div className="w-[32px] h-[32px] flex justify-center items-center">
                                <Image alt="" width={32} height={32} src="/images/upload.svg"/>
                            </div>
                            <p className="text-white text-[1rem]"> UPLOAD YOUR FILE & ORDER NOW </p>
                        </button>
                        <div className="flex items-center mt-[18px] mb-[10px]">
                            <p className="text-[1.5rem] font-bold leading-[2.25rem] text-[#996D01] mr-[8px]"> Not now. </p>
                            <p className="text-[1rem] leading-[1.625rem] text-[#996D01]"> I you can upload photos when reciving the locket </p>
                        </div>
                        <div className="bg-[#D4D4D4] h-[2px] my-[24px]"/>

                        <div className="flex mb-[24px]">
                            <div className="w-[2.5rem] h-[2.5rem] mr-[0.5rem]">
                                <Image alt="" src="/images/sharing.svg" width={24} height={24}/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[#996D01] text-[1rem] leading-[1.5rem] font-bold"> Unlimited Sharing </p>
                                <p className="text-[#747067] text-[1rem] leading-[1.3125rem]"> Access your memories any time as much as you want. There are no additional fees, access limitations or hidden costs. </p>
                            </div>
                        </div>
                        <div className="flex mb-[24px]">
                            <div className="w-[2.5rem] h-[2.5rem] mr-[0.5rem]">
                                <Image alt="" src="/images/NoBatteries.svg" width={24} height={24}/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[#996D01] text-[1rem] leading-[1.5rem] font-bold"> No Batteries Needed </p>
                                <p className="text-[#747067] text-[1rem] leading-[1.3125rem]"> The NFC chip in your Momento® Digital locket runs without any type of battery and will work with any NFC-enabled smartphone. </p>
                            </div>
                        </div>
                        <div className="flex mb-[24px]">
                            <div className="w-[2.5rem] h-[2.5rem] mr-[0.5rem]">
                                <Image alt="" src="/images/heart.svg" width={24} height={24}/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[#996D01] text-[1rem] leading-[1.5rem] font-bold"> Manage your Moments </p>
                                <p className="text-[#747067] text-[1rem] leading-[1.3125rem]"> After purchase, you can add all your special memories to your smart jewelry through this website or the Galatea Jewelry App. Available for iOS and Android. </p>
                            </div>
                        </div>
                        <div className="bg-[#D4D4D4] h-[2px] mb-[24px]"/>

                    </div>
                </div>

                <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[6.75rem] text-[#AC8118] text-center mt-[100px]">
                    Collection’s Items
                </h2>
                <LocketItem image="/images/lockets/locket5.png" title="Momento® Locket Pearl Flower" price={300.00}  categories={['Silver', 'Yellow Gold']} selectedCat={1} colorItems={[11,12,13]} selectedColor={11}/>
                <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[6.75rem] text-[#AC8118] text-center mt-[100px]">
                    You May Also Like
                </h2>
                <div className="flex flex-wrap justify-center items-center mt-[20px] mb-[5rem]">
                    <LocketItem image="/images/lockets/locket5.png" title="Momento® Locket Pearl Flower" price={300.00}  categories={['Silver', 'Yellow Gold']} selectedCat={1} colorItems={[11,12,13]} selectedColor={11}/>
                    <LocketItem image="/images/lockets/locket2.png" title="Momento® Locket Pearl Flower" price={300.00}  categories={['Silver', 'Yellow Gold']} selectedCat={1} colorItems={[11,12,13]} selectedColor={11}/>
                </div>

            </div>
        </div>
    )
}


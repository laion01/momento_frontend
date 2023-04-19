import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import LocketItem from "components/utils/LocketItem/Item";
import LocketViewer from "./LocketViewer"
import Image from "next/image";
import { useState } from "react";

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



export default function LocketsGallery() {
    const [isOpenDlg, openDlg] = useState(false);
    const [selectedColor, selectColor] = useState(1);
    const [selectedMetal, selectMetal] = useState(1);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container grow flex flex-col justify-center items-center relative">
                <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[6.75rem] text-[#AC8118] text-center mt-[100px]">
                    Momento® Locket Pearl Flower
                </h2>
                <p className="text-[1.5rem] leading-[2.25rem] text-center text-[#747067] leading-[2.25rem] mb-[3rem]"> 
                    By Galatea Jewelry by Artist
                </p>
                <div className="flex flex-wrap justify-center items-center mt-[20px] mb-[5rem]">
                    <LocketItem image="/images/lockets/locket5.png" title="Momento® Locket Pearl Flower" price={300.00}  categories={['Silver', 'Yellow Gold']} selectedCat={1} colorItems={[11,12,13]} selectedColor={11}/>
                    <LocketItem image="/images/lockets/locket5.png" title="Momento® Locket Pearl Flower" price={300.00}  categories={['Silver', 'Yellow Gold']} selectedCat={1} colorItems={[11,12,13]} selectedColor={11}/>
                    <LocketItem image="/images/lockets/locket5.png" title="Momento® Locket Pearl Flower" price={300.00}  categories={['Silver', 'Yellow Gold']} selectedCat={1} colorItems={[11,12,13]} selectedColor={11}/>
                    <LocketItem image="/images/lockets/locket5.png" title="Momento® Locket Pearl Flower" price={300.00}  categories={['Silver', 'Yellow Gold']} selectedCat={1} colorItems={[11,12,13]} selectedColor={11}/>
                    <LocketItem image="/images/lockets/locket5.png" title="Momento® Locket Pearl Flower" price={300.00}  categories={['Silver', 'Yellow Gold']} selectedCat={1} colorItems={[11,12,13]} selectedColor={11}/>
                    <LocketItem image="/images/lockets/locket5.png" title="Momento® Locket Pearl Flower" price={300.00}  categories={['Silver', 'Yellow Gold']} selectedCat={1} colorItems={[11,12,13]} selectedColor={11}/>
                    <LocketItem image="/images/lockets/locket2.png" title="Momento® Locket Pearl Flower" price={300.00}  categories={['Silver', 'Yellow Gold']} selectedCat={1} colorItems={[11,12,13]} selectedColor={11}/>
                </div>
            </div>
        </div>
    )
}

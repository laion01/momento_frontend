import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import Button from "components/utils/Buttons/Button";
import LocketItem from "components/utils/LocketItem/Item";
import LocketViewer from "./LocketViewer"
import Image from "next/image";
import { useEffect, useState } from "react";
import UploadFileDlg from "components/utils/UploadFileDlg";
import { useUtil } from "store/hook";
import { useRouter } from "next/router";
import UTILS_API from "api/Util";
import { useDispatch } from "react-redux";
import { setMyBag } from "store/slices/utilSlice";
import { toast } from 'react-toastify';

const colorItems = [1, 2, 3, 4,]

export default function Locket() {
    const dispatch = useDispatch()
    const router = useRouter();
    const { query } = router;
    const [isOpenDlg, openDlg] = useState(false);

    const [locketId, setLocketId] = useState(0);
    const [colorId, setColorId] = useState(0);
    const [metalId, setMetalId] = useState(0);

    const [quantity, setQuantity] = useState(1);
    const [total_amount, setAmount] = useState(0);
    const [price, setPrice] = useState(100);
    const [images, setImageList] = useState([]);

    const { colors, metals, myBag, productTypes } = useUtil()
    const [ validTypes, setValidTypes ] = useState([]);
    const [ validMetals, setValidMetals] = useState([]);
    const [ validColors, setValidColors] = useState([]);


    const onQuantityPlusClicked = () => {
        setQuantity(quantity < total_amount ? quantity + 1 : total_amount);
    }

    const onQuantityMinusClicked = () => {
        setQuantity(quantity > 1 ? quantity - 1 : 0);
    }

    useEffect(() => {
        if(router.query)
            load()
    }, [router.query])

    const load = async () => {
        console.log("_locketId______", router.query.locketId, router.query.metalId)
        if(router.query.locketId == undefined )
            return;
        // setLocketId(router.query.locketId);
        // setMetalId(router.query.metalId);
        // setColorId(router.query.colorId);

        // console.log({locketId, colorId, metalId})

        const { products } = await UTILS_API.getValidLockets(router.query.locketId);
        setValidTypes([...products])

        let mId=query.metalId, cId=query.colorId;
        let isValidMetal = false, isValidColor = false;
        let firstMetalId = 0, firstColorId = 0;
        let max_amount;
        for(let i = 0 ;i < products.length; i++ ) {
            if(firstMetalId == 0) {
                firstMetalId = products[i].metalId
                firstColorId = products[i].colorId
            }
            if(products[i].metalId == mId) {
                isValidMetal = true;
                if(products[i].colorId == cId) {
                    isValidColor = true;
                }
            }
        }
        if(!isValidMetal) {
            mId = firstMetalId;
            cId = firstColorId;
        }
        if(isValidMetal && !isValidColor) {
            for(let i = 0 ;i < products.length; i++ ) {
                if(products[i].metalId == mId) {
                    cId = products[i].colorId;
                    break;
                }
            }
        }

        const ms = [];
        const mids = [];
        products.map((product)=> {
            if(!mids.includes(product.metalId)) {
                ms.push(product.Metal)
                mids.push(product.metalId)
            }
        } )
        setValidMetals([...ms]);
        setLocketId(router.query.locketId);
        setMetalId(mId)
        setColorId(cId)
        setAmount(max_amount);
    }

    useEffect(() => {
        const color_list = [];
        const cids = [];
        validTypes.map((product)=> {
            if(product.metalId == metalId && !cids.includes(product.colorId)) {
                color_list.push(product.Color)
                cids.push(product.colorId)
            }
        })

        if(cids.length && !cids.includes(colorId)) {
            setColorId(cids[0])
        }
        setValidColors([...color_list])
    }, [metalId])

    useEffect(() => {
        validTypes.map((product)=> {
            if(product.metalId == metalId && product.colorId == colorId) {
                setAmount(product.amount)
                setPrice(product.price);
                setImageList([...product.Files]);
                console.log("Files: ", product.FIles)
            }
        })
    }, [colorId])

    // useEffect(() => {
    //     router.push(`locket?locketId=${locketId}&metalId=${metalId}&colorId=${colorId}`)
    // }, [metalId, colorId])


    const getTypeName = (t) => {
        for(let i = 0 ;i < productTypes.length; i++) {
            if(productTypes[i].id == t)
                return productTypes[i].name
        }
    }

    const onAddToBag = () => {
        if(quantity == 0) {
            toast.error("Incorrect Quantity", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return ;
        }
        let q  = 0;
        for(let i= 0; i< myBag.length; i++) {
            if(myBag[i].locketId == locketId && myBag[i].metalId == metalId && myBag[i].colorId == colorId)
                q = myBag[i].quantity;
        }
        if(q > 0) {
            const items = JSON.parse(JSON.stringify(myBag));
            for(let i= 0; i< myBag.length; i++) {
                if(items[i].locketId == locketId && items[i].metalId == metalId && items[i].colorId == colorId)
                    items[i].quantity = items[i].quantity + quantity;
            }
            dispatch(setMyBag({myBag: items}))

            toast.success(`+${quantity}  ` + (validTypes.length ? validTypes[0].Locket.name : "Momento Locket"), {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setQuantity(1);
        } else {
            const items = [...myBag, {
                id: validTypes[0].id,
                name: validTypes.length ? validTypes[0].Locket.name : "Momento Locket", 
                type: validTypes.length ? getTypeName(validTypes[0].Locket.id) : "Necklace",
                locketId, metalId, colorId, price,
                image : images[0],
                quantity,
            }]
    
            dispatch(setMyBag({myBag: items}))

            toast.success((validTypes.length ? validTypes[0].Locket.name : "Momento Locket") + " added!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        
    }

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex justify-center pt-[20px]">
            {!isOpenDlg ?
                <div className="container grow flex flex-col justify-center items-center relative">
                    <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[6.75rem] text-[#AC8118] text-center mt-[100px]">
                        { validTypes.length ? validTypes[0].Locket.name : "Momento® Locket"}
                    </h2>
                    <p className="text-[1.5rem] leading-[2.25rem] text-center text-[#747067] leading-[2.25rem] mb-[3rem]">
                        By Galatea Jewelry by Artist
                    </p>
                    <div className="flex flex-col md:flex-row justify-center mb-[3rem] px-[3rem]">
                        <LocketViewer images={images} />

                        <div className="flex flex-col ml-[0px] md:ml-[2rem]">
                            <div className="flex items-center mb-[1.5rem]">
                                <p className="text-[#747067] mr-[16px] text-[1rem]"> Metal: </p>
                                <div className="flex justify-center items-center">
                                    {validMetals.map((cat, index) =>
                                        <button key={cat.id} className="rounded-full text-[#747067] text-center leading-[1.3125rem] mx-[4px] px-[12px] border-[#747067] h-[33px]" style={{ borderWidth: cat.id == metalId ? 2 : 0, backgroundColor: cat.id == metalId ? "transparent" : "#74706714" }}
                                            onClick={() => { setMetalId(cat.id), router.push(`locket?locketId=${locketId}&metalId=${cat.id}&colorId=${colorId}`) }}
                                        >
                                            {cat.name}
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center mb-[1.5rem]">
                                <p className="text-[#747067] mr-[16px] text-[1rem]"> Color: </p>
                                <div className="flex justify-center items-center">
                                    {validColors.map((color, index) =>
                                        <button key={color.id} className="rounded-full pt-[3px] w-[2.5rem] h-[2.5rem] flex justify-center items-center border-[#747067]" style={{ borderWidth: color.id == colorId ? 2 : 0 }}
                                            onClick={() => { setColorId(color.id), router.push(`locket?locketId=${locketId}&metalId=${metalId}&colorId=${color.id}`) }}
                                        >
                                            <Image alt={color.name} src={color.image} width={32} height={32} />
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className="text-[#747067] mr-[16px] text-[1rem]"> Price: </p>
                                <p className="text-[#747067] mr-[16px] text-[1.25rem] font-bold"> ${price} </p>
                            </div>
                            <div className="bg-[#D4D4D4] h-[2px] my-[24px]" />
                            <div className="flex items-center">
                                <p className="text-[#747067] mr-[16px] text-[1rem]"> Quantity: </p>
                                <button className="w-[2rem] h-[2rem] rounded-full disabled:bg-[#BCB9B3] bg-[#996D01] text-white text-[1.5rem] text-center leading-[2rem]" disabled={quantity == 0}
                                    onClick={() => {
                                        onQuantityMinusClicked()
                                    }}
                                > - </button>
                                <p className="text-[#747067] mx-[16px] text-[1.25rem] font-bold"> {quantity} </p>
                                <button className="w-[2rem] h-[2rem] rounded-full disabled:bg-[#BCB9B3] bg-[#996D01] text-white text-[1.5rem] text-center leading-[2rem]"
                                    onClick={() => {
                                        onQuantityPlusClicked()
                                    }}
                                > + </button>
                                <div className="grow min-w-[0.875rem]" />
                                <Button disabled={quantity == 0} label="Add to Bag" onClick={() => {onAddToBag()}} />
                            </div>
                            <div className="bg-[#D4D4D4] h-[2px] my-[24px]" />
                            <button className="w-fit h-[4rem] rounded-full bg-[#996D01] px-[32px] text-white text-[1rem] flex items-center justify-center"
                                onClick={() => { openDlg(true) }}
                            >
                                <div className="w-[2rem] h-[2rem] mr-[0.875rem] flex justify-center items-center">
                                    <Image alt="" width={32} height={32} src="/images/upload.svg" />
                                </div>
                                <p className="text-white text-[1rem]"> UPLOAD YOUR FILE & ORDER NOW </p>
                            </button>
                            <div className="flex items-center mt-[18px] mb-[10px]">
                                <p className="text-[1.5rem] font-bold leading-[2.25rem] text-primary mr-[8px]"> Not now. </p>
                                <p className="text-[1rem] leading-[1.625rem] text-primary"> I you can upload photos when reciving the locket </p>
                            </div>
                            <div className="bg-[#D4D4D4] h-[2px] my-[24px]" />

                            <div className="flex mb-[24px]">
                                <div className="w-[2.5rem] h-[2.5rem] mr-[0.5rem]">
                                    <Image alt="" src="/images/sharing.svg" width={24} height={24} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-primary text-[1rem] leading-[1.5rem] font-bold"> Unlimited Sharing </p>
                                    <p className="text-[#747067] text-[1rem] leading-[1.3125rem]"> Access your memories any time as much as you want. There are no additional fees, access limitations or hidden costs. </p>
                                </div>
                            </div>
                            <div className="flex mb-[24px]">
                                <div className="w-[2.5rem] h-[2.5rem] mr-[0.5rem]">
                                    <Image alt="" src="/images/NoBatteries.svg" width={24} height={24} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-primary text-[1rem] leading-[1.5rem] font-bold"> No Batteries Needed </p>
                                    <p className="text-[#747067] text-[1rem] leading-[1.3125rem]"> The NFC chip in your Momento® Digital locket runs without any type of battery and will work with any NFC-enabled smartphone. </p>
                                </div>
                            </div>
                            <div className="flex mb-[24px]">
                                <div className="w-[2.5rem] h-[2.5rem] mr-[0.5rem]">
                                    <Image alt="" src="/images/heart.svg" width={24} height={24} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-primary text-[1rem] leading-[1.5rem] font-bold"> Manage your Moments </p>
                                    <p className="text-[#747067] text-[1rem] leading-[1.3125rem]"> After purchase, you can add all your special memories to your smart jewelry through this website or the Galatea Jewelry App. Available for iOS and Android. </p>
                                </div>
                            </div>
                            <div className="bg-[#D4D4D4] h-[2px] mb-[24px]" />

                        </div>
                    </div>

                    <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[6.75rem] text-[#AC8118] text-center mt-[100px]">
                        Collection’s Items
                    </h2>
                    <LocketItem image="/images/lockets/locket5.png" title="Momento® Locket Pearl Flower" price={300.00} categories={['Silver', 'Yellow Gold']} selectedCat={1} colorItems={[11, 12, 13]} colorId={11} />
                    <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[6.75rem] text-[#AC8118] text-center mt-[100px]">
                        You May Also Like
                    </h2>
                    <div className="flex flex-wrap justify-center items-center mt-[20px] mb-[5rem]">
                        <LocketItem image="/images/lockets/locket5.png" title="Momento® Locket Pearl Flower" price={300.00} categories={['Silver', 'Yellow Gold']} selectedCat={1} colorItems={[11, 12, 13]} colorId={11} />
                        <LocketItem image="/images/lockets/locket2.png" title="Momento® Locket Pearl Flower" price={300.00} categories={['Silver', 'Yellow Gold']} selectedCat={1} colorItems={[11, 12, 13]} colorId={11} />
                    </div>

                </div> :
                <UploadFileDlg onClose={openDlg} />
            }
        </div>
    )
}

// const images = [
//     {
//         url: '/images/jewelry.png',
//         width: 223, height: 332,
//         type: 1,
//     }, {
//         url: '/images/album1.jpg',
//         width: 436, height: 523,
//         type: 3,
//     }, {
//         url: '/images/jewelry.png',
//         width: 436, height: 523,
//         type: 2,
//     }, {
//         url: '/images/logo.png',
//         width: 500, height: 500,
//         type: 3,
//     }
// ]
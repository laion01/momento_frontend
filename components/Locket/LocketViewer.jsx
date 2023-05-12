import { useEffect, useState } from "react"
import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faImage, faGem } from "@fortawesome/free-solid-svg-icons";

export default function LocketViewer({ images }) {
    const [selectedItem, selectItem] = useState(-1);

    useEffect(() => {
        selectItem(0)
    }, [images])

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-row md:flex-col mr-[0px] md:mr-[0.75rem] mt-[0.75rem] md:mt-[0px]">
                { images.map((image, index) => 
                    <button key={index} className="w-[80px] h-[80px] m-[0.75rem] flex justify-center text-primary items-center bg-white border-[#996D01] overflow-hidden" 
                        onClick={() => { selectItem(index) }} 
                        style={{ borderWidth: index == selectedItem ? '2px' : '0', marginTop: index==0 ? "0px" : "0.75rem"}}>
                        <Image alt="" src={image.pathname} width={image.width} height={image.height}/>
                    </button>
                )}
                { images.length == 0 && 
                    <button className="w-[80px] h-[80px] m-[0.75rem] flex justify-center items-center bg-white border-[#996D01] overflow-hidden border-[2px] mt-[0.75rem]" onClick={() => {  }} >
                        <FontAwesomeSvgIcon icon={faGem} width={32} height={32} />
                    </button>
                }
            </div>
            { (images.length>0 && selectedItem != -1) &&
                <div className="w-[500px] 2xl:w-[750px] h-[500px] 2xl:h-[750px] aspect-square flex flex-wrap justify-center bg-white overflow-hidden relative rounded-[0.5rem] border-[#00000030] border-[1px]">
                    <Image alt="" src={images[selectedItem].pathname} objectFit="cover" layout="fill" width={images[selectedItem].width} height={images[selectedItem].height}/>
                    {/* <p> {images[selectedItem].width} : {images[selectedItem].height} </p> */}
                </div>
            }

            { images.length == 0 &&
                <div className="relative w-[500px] xl:w-[750px] aspect-square flex items-center justify-center bg-white h-fit text-primary rounded-[0.5rem] border-[#00000030] border-[1px]">
                    <FontAwesomeSvgIcon icon={faGem} width={256} height={256} />
                </div>
            }
        </div>
    )
}
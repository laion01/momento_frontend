import { useState } from "react"
import Image from "next/image"

export default function LocketViewer({ images }) {
    const [selectedItem, selectItem] = useState(0);

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-row md:flex-col mr-[0px] md:mr-[0.75rem] mt-[0.75rem] md:mt-[0px]">
                { images.map((image, index) => 
                    <button key={index} className="w-[80px] h-[80px] m-[0.75rem] flex justify-center items-center bg-white border-[#996D01] overflow-hidden" onClick={() => { selectItem(index) }} style={{ borderWidth: index == selectedItem ? '2px' : '0', marginTop: index==0 ? "0px" : "0.75rem"}}>
                        <Image alt="" src={image} width={80} height={80}/>
                    </button>
                )}
            </div>
            <div className="w-[750px] aspect-square flex items-center bg-white">
                <Image alt="" src={images[selectedItem]} width={750} height={750}/>
            </div>
        </div>
    )
}
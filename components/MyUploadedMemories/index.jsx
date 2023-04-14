import { FontAwesomeSvgIcon} from "react-fontawesome-svg-icon"
import Item from "./Item"

export default function MyUploadedMemories({}) {
    return (
        <div className="w-full bg-white flex flex-col p-[1.5rem] h-fit mb-[2rem] rounded-[0.5rem] shadow mb-[2rem]">
            <div className="flex items-center mb-[1.5rem]">
                <p className="text-[1.5rem] text-primary font-bold pl-[1rem]"> My uploaded memories </p>
            </div>
            <div className="flex flex-wrap">
                { images.map((item, index) => 
                    <Item key={index} image={item.image} type={item.type}/>
                )}
                <div className="md:w-1/4 w-1/3"></div>
                <div className="md:w-1/4 w-1/3"></div>
                <div className="md:w-1/4 w-1/3"></div>
            </div>
        </div>
    )
}


const images = [
    {
        image : "/images/memories/1.png", 
        type : "png",
    }, {
        image : "/images/memories/2.png", 
        type : "png",
    }, {
        image : "/images/memories/3.png", 
        type : "png",
    }, {
        image : "/images/memories/4.png", 
        type : "png",
    }, {
        image : "/images/memories/5.png", 
        type : "mp4",
    }, {
        image : "/images/memories/6.png", 
        type : "mp4",
    }, {
        image : "/images/memories/7.png", 
        type : "png",
    }, {
        image : "/images/memories/8.png", 
        type : "png",
    }, {
        image : "/images/memories/1.png", 
        type : "png",
    }, {
        image : "/images/memories/2.png", 
        type : "mp4",
    }, {
        image : "/images/memories/3.png", 
        type : "png",
    }, {
        image : "/images/memories/4.png", 
        type : "png",
    }, {
        image : "/images/memories/5.png", 
        type : "png",
    }, {
        image : "/images/memories/6.png", 
        type : "png",
    }, {
        image : "/images/memories/7.png", 
        type : "png",
    }, {
        image : "/images/memories/8.png", 
        type : "png",
    }, {
        image : "/images/memories/1.png", 
        type : "png",
    }, {
        image : "/images/memories/2.png", 
        type : "png",
    }, {
        image : "/images/memories/3.png", 
        type : "png",
    }, {
        image : "/images/memories/4.png", 
        type : "png",
    }, {
        image : "/images/memories/5.png", 
        type : "png",
    }, {
        image : "/images/memories/6.png", 
        type : "png",
    }, {
        image : "/images/memories/7.png", 
        type : "png",
    }, {
        image : "/images/memories/8.png", 
        type : "png",
    }, {
        image : "/images/memories/4.png", 
        type : "png",
    }, {
        image : "/images/memories/1.png", 
        type : "png",
    }
]
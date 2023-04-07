import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import Item from "./Item"

export default function ReviewSection() {
    return (
        <div className="mx-[20px] md:mx-[40px] w-[calc(100vw-40px)] md:w-[calc(100vw-80px)] flex flex-col justify-center relative pt-[20px] pb-[80px]">
            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-[#AC8118] text-center mt-[100px] mb-[40px]">
                Reviews
            </h2>
            <div className="flex flex-wrap justify-center items-center">
                <Item data={{
                    context: "“Awesome App!!! It can store loads of precious memories and voices on the cloud and the key to unlock it is the connection between the pearl and your phone“",
                    user: {
                        name: "Loc Huynh",
                        rating: 5,
                        avatar: "/images/avatars/1.jpg",
                    }
                }}/>
                <Item data={{
                    context: "“Awesome App!!! It can store loads of precious memories and voices on the cloud and the key to unlock it is the connection between the pearl and your phone“",
                    user: {
                        name: "Louis Bryant",
                        rating: 3.5,
                        avatar: "/images/avatars/2.jpg",
                    }
                }}/>
                <Item data={{
                    context: "“Awesome App!!! It can store loads of precious memories and voices on the cloud and the key to unlock it is the connection between the pearl and your phone“",
                    user: {
                        name: "Daniel Lee",
                        rating: 5,
                        avatar: "/images/avatars/3.jpg",
                    }
                }}/>
            </div>
        </div>
    )
}
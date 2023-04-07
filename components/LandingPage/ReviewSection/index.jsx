import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import Item from "./Item"

export default function ReviewSection() {
    return (
        <div className="mx-[20px] md:mx-[40px] w-[calc(100vw-40px)] md:w-[calc(100vw-80px)] bg-[#F5F5F5] flex flex-col justify-center relative pt-[20px]">
            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-[#AC8118] text-center mt-[100px] mb-[40px]">
                Reviews
            </h2>
            <div className="flex flex-wrap justify-center items-center mt-[20px]">
                <Item image="/images/nobatteries.svg" title="No Batteries Needed" context="The NFC chip in your Momento® Digital locket runs without any type of battery and will work with any NFC-enabled smartphone." />
                <Item image="/images/waterproof.svg" title="Waterproof" context="Momento Lockets are waterproof. Care for it as  you would any piece of fine jewelry." />
                <Item image="/images/pearl.svg" title="Unique" context="Momento Digital Locket is a patented device and the first of its kind in the world. Don't settle for imitations; choose the original and trusted Momento Digital Locket." />
            </div>
        </div>
    )
}
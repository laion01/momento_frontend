import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function NotificationItem({name}) {
    return (
        <button className="w-full flex mb-[0.5rem] bg-[#F5F5F5] px-[0.75rem] py-[0.25rem] rounded-[0.25rem]"
            onClick={() => {
                
            }}
        >
            <div className="grow">
                <p className="text-[1rem] leading-[1.6875rem] text-left"> Order craeted by David Leiva </p>
            </div>
            <div className="w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center">
                <FontAwesomeSvgIcon icon={faClose} width={12} height={12}/>
            </div>
        </button>
    )
}
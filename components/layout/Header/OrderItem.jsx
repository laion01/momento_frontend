import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function OrderItem({order, onCloseMenu}) {
    const router = useRouter();

    return (
        <div className="w-full flex mb-[0.5rem] bg-[#F5F5F5] px-[0.75rem] py-[0.25rem] rounded-[0.25rem]"
            
        >
            <button className="grow" onClick={() => {
                router.push(`/admin/order?id=${order.id}`);
                onCloseMenu();
            }}>
                <p className="text-[1rem] leading-[1.6875rem] text-left"> Order created by by {order.User.first_name} {order.User.last_name} </p>
            </button>
            <div className="w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center">
                <FontAwesomeSvgIcon icon={faClose} width={12} height={12}/>
            </div>
        </div>
    )
}
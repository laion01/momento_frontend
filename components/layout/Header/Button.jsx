import Link from "next/link";

export default function Button({link, label, target}) {
    return(
        <div className="w-full h-[60px] py-[5px] px-[10px] my-[5px] bg-[#303030] hover:bg-[#202020] rounded-[5px] flex justify-center items-center">
            <Link href={link}>
                <a target={target} className="text-[white] text-[24px]">
                    {label}
                </a>
            </Link>
        </div>
    )
}
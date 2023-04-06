import Link from "next/link";

export default function NavItem({link, target, label}) {
    return(
        <Link href={link}>
            <a target={target}
                className="mx-[20px] my-[11px] text-[1rem] font-ibm text-[#747067]">
                { label }
            </a>
        </Link>
    );
};
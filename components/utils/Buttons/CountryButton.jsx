import Image from "next/image";

export default function CountryButton({country, onClick}) {
    return (
        <button className="flex items-center h-[2.5rem] hover:bg-[#00000020] focus:bg-[#00000020] outline-none" onClick={(e) => {onClick(e)}}> 
            <div className="w-[2.5rem] h-[2.5rem] flex justify-center items-center">
                <Image src={`/images/svg/flags/${String(country.value).toLowerCase()}.svg`} width={24} height={24}/>
            </div>
            <p className="grow text-left"> {country.text} </p>
        </button>
    )
}
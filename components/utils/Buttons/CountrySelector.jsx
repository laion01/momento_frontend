import { useEffect, useRef, useState } from "react";
import CountryButton from "./CountryButton";
import CountryNames from "./CountryNames";
import Image from "next/image";

export default function CountrySelector ({country, selectCountry}) {
    const [isDropdown, openDropdown] = useState(false);
    // const [country, selectCountry] = useState();
    const [countryList, setCountryList] = useState([...CountryNames.CountryNames]);
    const [searchString, setSearch] = useState("");
    const searchBox = useRef(null)

    useEffect(() => {
        if(searchBox.current != null) {
            searchBox.current.focus();
        }
    }, [searchBox.current])

    return (
        <div className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px] relative">
            <button className="w-full flex items-center h-[3rem]" onClick={() => {openDropdown(!isDropdown)}}> 
                <div className="w-[2rem] h-[2rem] flex justify-center items-center">
                    { country && 
                        <Image src={`/images/svg/flags/${String(country.value).toLowerCase()}.svg`} width={24} height={24}/>
                    }
                </div>
                <p className="grow text-left ml-[0.5rem]"> {country?.text} </p>
            </button>
            { isDropdown && 
                <>
                    <div className="fixed w-[100vw] h-[100vh] top-0 left-0 z-40" onClick={() => {openDropdown(!isDropdown)}}></div>
                    <div className="absolute left-0 top-[3.5rem] flex flex-col p-[0.75rem] z-50 bg-white shadow rounded-[0.5rem] w-full">
                        <input ref={searchBox} type="text" value = {searchString} onChange={(e) => {setSearch(e.target.value)}}className="h-[2.5rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Search" />
                        <div className="flex flex-col max-h-[30rem] overflow-y-auto pt-[0.5rem] w-full">
                            { countryList.filter((it, id) => {return String(it.text).toLowerCase().includes(searchString.toLowerCase())}).map((item, index) => 
                                <CountryButton key={index} country={item} onClick={(e) => {selectCountry(item), openDropdown(false), setSearch("")}}/>    
                            )}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function StateSelector ({country, stateList, selectState, state}) {
    const [isDropdown, openDropdown] = useState(false);
    // const [state, setState] = useState();
    const [searchString, setSearch] = useState("");
    const searchBox = useRef(null)

    useEffect(() => {
        if(searchBox.current != null) {
            searchBox.current.focus();
        }
    }, [searchBox.current])

    useEffect(() => {
        selectState(stateList[country.value][0]);
    }, [country])


    return (
        <div className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px] relative">
            <button className="w-full flex items-center h-[3rem]" onClick={() => {openDropdown(!isDropdown)}}> 
                <p className="grow text-left"> {state.name} </p>
            </button>
            { isDropdown && 
                <>
                    <div className="fixed w-[100vw] h-[100vh] top-0 left-0 z-40" onClick={() => {openDropdown(!isDropdown)}}></div>
                    <div className="absolute left-0 top-[3.5rem] flex flex-col p-[0.75rem] z-50 bg-white shadow rounded-[0.5rem] w-full">
                        <input ref={searchBox} type="text" value = {searchString} onChange={(e) => {setSearch(e.target.value)}}className="h-[2.5rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Search" />
                        <div className="flex flex-col max-h-[30rem] overflow-y-auto pt-[0.5rem] w-full">
                            { stateList[country.value].filter((s) => { return String(s.name).toLowerCase().includes(searchString.toLowerCase())}).map((ss, index) => 
                                    <button key={index} className="flex items-center h-[2.5rem] hover:bg-[#00000020]" 
                                        onClick={(e) => {selectState(ss), openDropdown(false), setSearch("")}}> 
                                        <div className="w-[2.5rem] h-[2.5rem] flex justify-center items-center">
                                        </div>
                                        <p className="grow text-left"> {ss.name} </p>
                                    </button>
                                )}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
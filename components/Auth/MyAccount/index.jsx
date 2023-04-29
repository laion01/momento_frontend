import { useState } from "react";
import Title from "components/utils/Title";
import TabItem from "./TabItem";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Address from "./Address";
import Details from "./Details";
import { useDispatch } from "react-redux";
import { logout } from "store/slices/authSlice";

export default function MyAccount() {
    const dispatch = useDispatch();
    const [selectedTab, selectTab] = useState(0);

    const onLogoutClicked = async () => {
        dispatch(logout());
    }

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container grow flex flex-col justify-center items-center relative pb-[8rem]">
                <Title title="My Account" subtitle="By Galatea Jewelry by Artist" type={1}/>
                <div className="w-full px-[1rem] flex flex-col md:flex-row md:px-[3rem]">
                    <div className="bg-white flex flex-col p-[0.5rem] h-fit mr-0 md:mr-[2rem] rounded-[0.5rem] shadow mb-[2rem] md:max-w-[416px] min-w-[200px]">
                        <p className="text-primary text-[1.125rem] leading-[1.6875rem] p-[1.25rem] font-bold border-b-[1px] border-[#D4D4D4]"> My Account </p>
                        <div className="flex flex-row md:flex-col items-start overflow-x-auto">
                            { TABLIST.map((item, index) =>
                                <TabItem label={item} selectedItem={selectedTab} selectItem={selectTab} id={index} key={index}/>
                            )}
                            <button onClick={() => {

                            }} className="md:w-full whitespace-nowrap px-[30px] text-[1rem] text-left text-primary leading-[1.6875rem]  pt-[1.25rem] pb-[0.625rem] md:pb-[1.25rem] border-b-[1px] md:border-b-[0px] border-primary md:border-[#D4D4D4]">
                                <p> Log out </p>
                            </button>
                        </div>
                    </div>
                    { selectedTab == 0 && <Dashboard /> }
                    { selectedTab == 1 && <Orders /> }
                    { selectedTab == 2 && <Address /> }
                    { selectedTab == 3 && <Details /> }
                </div>
            </div>
        </div>
    )
}


const TABLIST = [
    "Dashboard",
    "Orders",
    "Address",
    "Account Details"
]
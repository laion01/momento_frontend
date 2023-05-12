import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState, useRef } from "react";
import Item from "components/MyBag/Item";
import PaymentSection from "./PaymentSection";
import MyUploadedMemories from "components/MyUploadedMemories";
import { useDispatch } from "react-redux";
import { useUtil, useAuth } from "store/hook";
import CountrySelector from "components/utils/Buttons/CountrySelector";
import StateSelector from "components/utils/Buttons/StateSelector";
import stateList from "../../config/CountryData";
import { setShippingAddress } from "store/slices/authSlice";
import UTILS_API from "api/Util";
import { toast } from 'react-toastify';
import { useRouter } from "next/router";
import { setMyBag } from "store/slices/utilSlice";

export default function Checkout() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { userId, firstName, lastName, phone, email, address, country, state, city, apartment, zipcode, shippingAddress } = useAuth();
    const { myBag } = useUtil();
    const [ isValidShippingAddress, checkShipping] = useState(false);

    const [updatedFields, setUpdatedFields] = useState([])

    const [_country, setCountry] = useState(country ? country : { "value": "US", "group": "U", "text": "United States" });
    const [_state, setState] = useState(state ? state : { abbreviation: "AL", name: "Alabama", country: "US" });

    const [_firstName, setFirstName] = useState({
        value: "", error: '', newValue: "",
    });
    const [_lastName, setLastName] = useState({
        value: "", error: '', newValue: "",
    });
    const [_email, setEmail] = useState({
        value: "", error: '', newValue: "",
    });
    const [_city, setCity] = useState({
        value: "", error: '', newValue: "",
    });
    const [_apartment, setApartment] = useState({
        value: "", error: '', newValue: "",
    });
    const [_address, setAddress] = useState({
        value: "", error: '', newValue: "",
    });
    const [_zipcode, setZipcode] = useState({
        value: "", error: '', newValue: "",
    });
    const [_phone, setPhone] = useState({
        value: "", error: '', newValue: "",
    });

    useEffect(() => {
        if (userId == 0)
            return;
        if (!shippingAddress) {
            setFirstName({ ..._firstName, value: firstName, error: '', newValue: firstName, });
            setLastName({ value: lastName, error: '', newValue: lastName, });
            setEmail({ value: email, error: '', newValue: email, });
            setPhone({ value: phone, error: '', newValue: phone, });
            setCity({ value: city, error: '', newValue: city, });
            setApartment({ value: apartment, error: '', newValue: apartment, });
            setAddress({ value: address, error: '', newValue: address, });
            setZipcode({ value: zipcode, error: '', newValue: zipcode, });
            setCountry(country);
            setState(state);
        } else {
            const bb = JSON.parse(shippingAddress);
            console.log(bb);
            setFirstName({ value: bb.firstName, error: '', newValue: bb.firstName, });
            setLastName({ value: bb.lastName, error: '', newValue: bb.lastName, });
            setEmail({ value: bb.email, error: '', newValue: bb.email, });
            setPhone({ value: bb.phone, error: '', newValue: bb.phone, });
            setCity({ value: bb.city, error: '', newValue: bb.city, });
            setApartment({ value: bb.apartment, error: '', newValue: bb.apartment, });
            setAddress({ value: bb.address, error: '', newValue: bb.address, });
            setZipcode({ value: bb.zipcode, error: '', newValue: bb.zipcode, });
            setCountry(bb.country);
            setState(bb.state);
        }
    }, [firstName, lastName, email, phone, country, state, city, apartment, address, zipcode, userId]);

    const [isDropdown, openDropdown] = useState(true);
    const [pageNum, setPageNum] = useState(1);
    const [totalPrice, setTotalPrice] = useState(100);

    useEffect(() => {
        let p = 0;
        myBag.map((item) => {
            p += item.price * item.quantity;
        })
        setTotalPrice(p);
    }, [myBag])

    useEffect(() => {
        checkShippingAddress()
    }, [_firstName, _lastName, _email, _phone, _address, _city, _country, _state, _zipcode])

    const onChangeUserInfo = (field, value) => {
        const list = JSON.parse(JSON.stringify(updatedFields));
        if (field == "firstname") {
            setFirstName({ ..._firstName, error: '', value: value })
            if (value != _firstName.newValue) { if (!list.includes(field)) list.push(field); } else list.splice(list.indexOf(field), 1)
        }
        if (field == "lastname") {
            setLastName({ ..._lastName, error: '', value: value })
            if (value != _lastName.newValue) { if (!list.includes(field)) list.push(field); } else list.splice(list.indexOf(field), 1)
        }
        if (field == "email") {
            setEmail({ ..._email, error: '', value: value })
            if (value != _email.newValue) { if (!list.includes(field)) list.push(field); } else list.splice(list.indexOf(field), 1)
        }
        if (field == "city") {
            setCity({ ..._city, error: '', value: value })
            if (value != _city.newValue) { if (!list.includes(field)) list.push(field); } else list.splice(list.indexOf(field), 1)
        }
        if (field == "apartment") {
            setApartment({ ..._apartment, error: '', value: value })
            if (value != _apartment.newValue) { if (!list.includes(field)) list.push(field); } else list.splice(list.indexOf(field), 1)
        }
        if (field == "address") {
            setAddress({ ..._address, error: '', value: value })
            if (value != _address.newValue) { if (!list.includes(field)) list.push(field); } else list.splice(list.indexOf(field), 1)
        }
        if (field == "zipcode") {
            setZipcode({ ..._zipcode, error: '', value: value })
            if (value != _zipcode.newValue) { if (!list.includes(field)) list.push(field); } else list.splice(list.indexOf(field), 1)
        }
        if (field == "phone") {
            setPhone({ ..._phone, error: '', value: value })
            if (value != _phone.newValue) { if (!list.includes(field)) list.push(field); } else list.splice(list.indexOf(field), 1)
        }
        if (field == "country") {
            setCountry(value);
            if (value != country) { if (!list.includes(field)) list.push(field); } else list.splice(list.indexOf(field), 1)
        }
        if (field == "state") {
            setState(value);
            if (value != state) { if (!list.includes(field)) list.push(field); } else list.splice(list.indexOf(field), 1)
        }
        setUpdatedFields([...list]);
    }

    const onContinueToPayment = () => {
        dispatch(setShippingAddress({
            shippingAddress: {
                firstName: _firstName.value, lastName: _lastName.value, email: _email.value, phone: _phone.value, country: _country, state: _state, city: _city.value, apartment: _apartment.value, address: _address.value, zipcode: _zipcode.value
            }
        }))

        setPageNum(2)
    }

    const onPaypalClicked = async (data) => {
        try {
            const res = await UTILS_API.createOrder({...data, myBag});
            console.log(res)
        } catch (e) {

        }
    }

    const onStripeClicked = async (data) => {
        try {
            const res = await UTILS_API.createOrder({...data, myBag});
            console.log(res)

            toast.success('Your order placed successfully!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            dispatch(setMyBag({myBag: []}));
            router.push(`/order?id=${res.data.order.id}`);
        } catch (e) {
        }
    }

    const checkShippingAddress = () => {
        const valid = true;
        if(!_firstName.value) valid = false;
        if(!_lastName.value) valid = false;
        if(!_phone.value) valid = false;
        if(!_city.value) valid = false;
        if(!_address.value) valid = false;
        if(!_zipcode.value) valid = false;
        if(!_country) valid = false;
        if(!_state) valid = false;

        checkShipping(valid);
    }

    return (
        <div className="mx-[20px] md:mx-[40px] bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container grow flex flex-col justify-center items-center relative pb-[8rem]">
                <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[6.75rem] text-[#AC8118] text-center mt-[100px] mb-[3rem]">
                    Checkout
                </h2>
                <div className="flex mb-[3rem]">
                    <button className="flex flex-col mr-[32px]" onClick={() => { setPageNum(1) }}>
                        <div className="w-full flex rounded-full h-[0.5rem] mb-[0.5rem]" style={{ backgroundColor: pageNum == 1 ? "#996D01" : "#74706726" }}></div>
                        <p className="text-[0.875rem] font-bold" style={{ color: pageNum == 1 ? "#996D01" : "#747067" }}> 1. Shipping </p>
                    </button>
                    <button className="flex flex-col">
                        <div className="w-full flex rounded-full h-[0.5rem] mb-[0.5rem]" style={{ backgroundColor: pageNum == 2 ? "#996D01" : "#74706726" }}></div>
                        <p className="text-[0.875rem] font-bold" style={{ color: pageNum == 2 ? "#996D01" : "#747067" }}> 2. Payment </p>
                    </button>
                </div>
                <div className="w-full flex mr-[2rem]">
                    <div className="flex flex-col min-w-[540px] mx-[50px] w-min">
                        <div className="bg-white flex flex-col p-[1.5rem] h-fit mb-[2rem] rounded-[0.5rem] shadow mb-[2rem]">
                            <div className="flex justify-between items-center mb-[1.5rem] pb-[1.5rem] border-b-[1px] border-b-[#D4D4D4]">
                                <p className="text-primary text-[1.125rem] font-bold ml-[10px]"> My Bag ({myBag.length} items) </p>
                                <button className="text-[#747067] flex justify-center items-center" onClick={() => { openDropdown(!isDropdown) }}>
                                    <FontAwesomeSvgIcon icon={!isDropdown ? faAngleDown : faAngleUp} width={20} height={20} className="text-[#747067]" />
                                </button>
                            </div>
                            {isDropdown &&
                                <div className="flex flex-col">
                                    {myBag.map((item, index) =>
                                        <Item key={index} data={item} />
                                    )}
                                </div>
                            }

                            <div className="flex justify-between items-center mb-[0.25rem] text-[1rem] font-bold leading-[1.6875rem] text-[#747067]">
                                <p> Total </p>
                                <p> ${totalPrice} </p>
                            </div>
                        </div>
                        <MyUploadedMemories />
                    </div>
                    {pageNum == 1 ?
                        <div className="flex flex-col grow">
                            <div className="bg-white flex flex-col px-[1.5rem] p-[24px] h-fit mb-[2rem] rounded-[0.5rem] shadow">
                                <p className="text-[1.5rem] text-primary font-bold mb-[2rem]"> Shipping Address </p>
                                <div className="flex flex-col md:flex-row mb-[1.5rem]">
                                    <div className="grow pr-[0px] md:pr-[0.75rem] mb-[1.5rem] md:mb-[0rem]">
                                        <input type="text" value={_firstName.value} onChange={(e) => { onChangeUserInfo("firstname", e.target.value) }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="First Name" />
                                    </div>
                                    <div className="grow pl-[0px] md:pl-[0.75rem]">
                                        <input type="text" value={_lastName.value} onChange={(e) => { onChangeUserInfo("lastname", e.target.value) }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="flex mb-[2rem]">
                                    <input type="email" value={_email.value} onChange={(e) => { onChangeUserInfo("email", e.target.value) }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Email" />
                                </div>
                                <div className="flex flex-col md:flex-row mb-[1.5rem]">
                                    <div className="w-1/2 pr-[0px] md:pr-[0.75rem] mb-[1.5rem] md:mb-[0rem]">
                                        <CountrySelector country={_country} selectCountry={(v) => { onChangeUserInfo("country", v) }} />
                                    </div>
                                    <div className="grow pl-[0px] md:pl-[0.75rem]">
                                        {stateList[_country?.value]?.length > 0 &&
                                            <StateSelector country={_country} state={_state} stateList={stateList} selectState={(v) => { onChangeUserInfo("state", v) }} />
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row mb-[1.5rem]">
                                    <div className="w-1/2 pr-[0px] md:pr-[0.75rem] mb-[1.5rem] md:mb-[0rem]">
                                        <input type="text" value={_city.value} onChange={(e) => { onChangeUserInfo("city", e.target.value) }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="City" />
                                    </div>
                                    <div className="grow pl-[0px] md:pl-[0.75rem]">
                                        <input type="text" value={_apartment.value} onChange={(e) => { onChangeUserInfo("apartment", e.target.value) }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Apartment (Optioinal)" />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row mb-[1.5rem]">
                                    <div className="w-1/2 pr-[0px] md:pr-[0.75rem] mb-[1.5rem] md:mb-[0rem]">
                                        <input type="text" value={_address.value} onChange={(e) => { onChangeUserInfo("address", e.target.value) }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Address" />
                                    </div>
                                    <div className="grow pl-[0px] md:pl-[0.75rem]">
                                        <input type="text" value={_zipcode.value} onChange={(e) => { onChangeUserInfo("zipcode", e.target.value) }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Zipcode" />
                                    </div>
                                </div>
                                <div className="flex mb-[1.5rem]">
                                    <input type="text" value={_phone.value} onChange={(e) => { onChangeUserInfo("phone", e.target.value) }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Phone" />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button className="h-[3rem] rounded-full bg-[#996D01] disabled:bg-[#BCB9B3] px-[24px] text-white text-[1rem]"
                                    onClick={() => { onContinueToPayment() }} disabled={!isValidShippingAddress}
                                > Continue to Payment </button>
                            </div>
                        </div> :
                        <div className="flex flex-col grow">
                            <PaymentSection 
                                firstName={_firstName} 
                                lastName={_lastName} 
                                address={_address} 
                                country={_country} 
                                state={_state} 
                                city={_city} 
                                apartment={_apartment} 
                                email={_email} 
                                phone={_phone} 
                                zipcode={_zipcode}
                                onBack={() => {setPageNum(1)}}

                                onStripeClicked={(data) => {onStripeClicked(data)}}
                                onPaypalClicked={(data) => {onPaypalClicked(data)}}
                                />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}


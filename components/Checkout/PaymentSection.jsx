import Image from "next/image";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { useState, useEffect, useRef } from "react";
import CountrySelector from "components/utils/Buttons/CountrySelector";
import StateSelector from "components/utils/Buttons/StateSelector";
import stateList from "../../config/CountryData";
import { useAuth, useUtil } from "store/hook";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('pk_test_51JS6iTJi8Mhamixz7ZfPhC0Yn3sp7ft7RJZO1zn228RPbN8vUpkbNELlxP8n8Bx1WOPH21vx2X4iRxGgLpVnTaUH00vYOcpgTO');
import CheckoutForm from "./CheckoutForm";
import UTILS_API from "api/Util";
import PaymentCard from "./PaymentCard";
import { setMyBag } from "store/slices/utilSlice";

import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";

// import * as dotenv from 'dotenv';

// dotenv.config();

import { faCcStripe } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

export default function PaymentSection({ firstName, lastName, email, phone, address, city, apartment, state, country, zipcode, onBack, onStripeClicked }) {
    const { userId } = useAuth();
    const { myBag } = useUtil();
    const [billingAddrOption, setBillingAddrOption] = useState(1);
    const [updatedFields, setUpdatedFields] = useState([])
    const dispatch = useDispatch();
    const router = useRouter();

    const [_country, setCountry] = useState(country ? country : { "value": "US", "group": "U", "text": "United States" });
    const [_state, setState] = useState(state ? state : { abbreviation: "AL", name: "Alabama", country: "US" });

    const [_firstName, setFirstName] = useState(firstName);
    const [_lastName, setLastName] = useState(lastName);
    const [_email, setEmail] = useState(email);
    const [_city, setCity] = useState(city);
    const [_apartment, setApartment] = useState(apartment);
    const [_address, setAddress] = useState(address);
    const [_zipcode, setZipcode] = useState(zipcode);
    const [_phone, setPhone] = useState(phone);

    const [clientSecret, setClientSecret] = useState("");
    const [orderId, setOrderId] = useState(0);
    const [pId, setPaymentId] = useState("");

    const formRef = useRef(null)

    // const [ client_secret, setClientSecret] = useState("")

    useEffect(() => {
        if(myBag?.length > 0)
            getPaymentIntent();
    }, [myBag]);

    const getPaymentIntent = async () => {
        const res = await UTILS_API.getPaymentIntent(myBag);
        if (res.success) {
            setClientSecret(res.secret);
        }
    }

    const onOptionchaged = (val) => {
        setBillingAddrOption(val)
    }

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

    const onCreateOrder = async () => {
        if(!!orderId)
            return ;

        try {
            const res = await UTILS_API.createOrder({ 
                shippingAddress: {firstName, lastName, email, phone, address, city, apartment, state, country, zipcode}, 
                billingAddress: {firstName: _firstName, lastName: _lastName, email: _email, phone: _phone, address: _address, city: _city, apartment: _apartment, state: _state, country: _country, zipcode: _zipcode}, 
                myBag, userId
            });

            setOrderId(res.data.order.id);
        } catch (e) {
            console.error(e);
        }
    }

    const onPaymentSuccess = async (pid) => {
        try {
            setPaymentId(pid)
        } catch (e) {
        }
    }

    useEffect(() => {
        console.log({orderId, pId})
        if(orderId > 0 && pId != "") {
            setPaymentIdOnDB();
        }
    }, [orderId, pId])

    const setPaymentIdOnDB = async () => {
        const res = await UTILS_API.setPaymentId(orderId, pId);
        dispatch(setMyBag({myBag: []}));

        // const shipping = await UTILS_API.requestUPS(orderId);
        // console.log(shipping);
        router.push(`/order?id=${orderId}`);
    }

    return (
        <div className="w-full flex flex-col">
            <div className="bg-white flex flex-col p-[1.5rem] rounded-[0.5rem] shadow mb-[2rem]">
                <div className="flex items-center mb-[0.5rem]">
                    <p className="text-[1.5rem] font-bold leading-[2.25rem] text-primary grow">
                        Shipping Address
                    </p>
                    <button className="flex items-center" onClick={onBack}>
                        <FontAwesomeSvgIcon icon={faEdit} width={16} height={16} color="#747067" />
                        <p className="text-[#747067] text-[1rem] ml-[0.5rem]"> Edit </p>
                    </button>
                </div>
                <p className="text-[1rem] text-[#747067] leading-[1.6875rem] mb-[0.5rem]">
                    {firstName.value} {lastName.value} <br />
                    {address.value} {city.value} {state.name} {country.text}
                </p>
                <p className="text-[1.125rem] text-[#747067] font-bold leading-[2.25rem]">
                    Delivery date: June 23, 2021
                </p>
            </div>
            <div className="bg-white flex flex-col p-[1.5rem] rounded-[0.5rem] shadow mb-[2rem]">
                <div className="flex items-center mb-[1.5rem]">
                    <p className="text-[1.5rem] font-bold leading-[2.25rem] text-primary grow">
                        Payment Method
                    </p>
                    <button className="flex items-center mr-[0.5rem] w-[2rem] h-[1.5rem] ">
                        <Image alt="" src="/images/visa.svg" width={32} height={24} />
                    </button>
                    <button className="flex items-center mr-[0.5rem] w-[2rem] h-[1.5rem] ">
                        <Image alt="" src="/images/mastercard.svg" width={32} height={24} />
                    </button>
                    <button className="flex items-center mr-[0.5rem] w-[2rem] h-[1.5rem] ">
                        <Image alt="" src="/images/amex.svg" width={32} height={24} />
                    </button>
                    <button className="flex items-center mr-[0.5rem] w-[2rem] h-[1.5rem] ">
                        <Image alt="" src="/images/discover.svg" width={32} height={24} />
                    </button>
                </div>
                {/* <form action="/api/checkout_sessions" method="POST">
                    <section>
                        <button type="submit" role="link">
                            Checkout
                        </button>
                    </section>
                    <style jsx>
                        {`
                            section {
                                background: #ffffff;
                                display: flex;
                                flex-direction: column;
                                width: 400px;
                                height: 112px;
                                border-radius: 6px;
                                justify-content: space-between;
                            }
                            button {
                                height: 36px;
                                background: #556cd6;
                                border-radius: 4px;
                                color: white;
                                border: 0;
                                font-weight: 600;
                                cursor: pointer;
                                transition: all 0.2s ease;
                                box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
                            }
                            button:hover {
                                opacity: 0.8;
                            }
                        `}
                    </style>
                </form> */}
                { clientSecret &&
                    <Elements options={{ clientSecret: clientSecret, appearance: { theme: 'light', labels: 'floating' } }} stripe={stripePromise}>
                        <PaymentCard clientSecret={clientSecret} onSuccess={(r) => {onPaymentSuccess(r)}} onCreateOrder={() => {onCreateOrder()}} orderId={orderId}/>
                    </Elements>
                }

                {/* <div className="flex mb-[1.5rem]">
                    <div className="w-1/2 flex h-[3rem] items-center mr-[0.75rem] px-[0.625rem] border-[1px] border-[#D4D4D4] rounded-[0.25rem]">
                        <div className="w-[32px] h-[24px] mr-[0.625rem] text-primary">
                            <FontAwesomeSvgIcon icon={faCcStripe} width={24} height={24} />
                        </div>
                        <input type="text" className="text-[1rem] leading-[1.6875rem] outline-none" placeholder="Card Number" />
                    </div>
                    <div className="w-1/2 flex h-[3rem] items-center grow ml-[0.75rem] px-[0.625rem] border-[1px] border-[#D4D4D4] rounded-[0.25rem]">
                        <input type="text" className="grow text-[1rem] leading-[1.6875rem] outline-none" placeholder="Name on Card" />
                    </div>
                </div>
                <div className="flex mb-[3.375rem]">
                    <div className="w-1/2 flex h-[3rem] items-center mr-[0.75rem] px-[0.625rem] border-[1px] border-[#D4D4D4] rounded-[0.25rem]">
                        <input type="text" className="grow text-[1rem] leading-[1.6875rem] outline-none" placeholder="Expiration Date (MM/YY)" />
                    </div>
                    <div className="w-1/2 flex h-[3rem] items-center grow ml-[0.75rem] px-[0.625rem] border-[1px] border-[#D4D4D4] rounded-[0.25rem]">
                        <input type="text" className="grow text-[1rem] leading-[1.6875rem] outline-none" placeholder="Security Code" />
                    </div>
                </div> */}

                <div className="flex flex-col mb-[1.5rem]">
                    <p className="text-[1.5rem] font-bold leading-[2.25rem] text-primary">
                        Billing Address
                    </p>
                    <p className="text-[0.875rem] leading-[1.3125rem] text-[#747067]">
                        Select the address that matches your card or payment method.
                    </p>
                </div>

                <div className="flex flex-col mb-[1rem]">
                    <button className="flex items-center h-[3rem]" onClick={() => { onOptionchaged(1) }}>
                        <div className="rounded-full min-w-[1.25rem] h-[1.25rem] mr-[1rem] border-[#996D01]" style={{ borderWidth: billingAddrOption == 1 ? "5px" : "1px", opacity: billingAddrOption == 1 ? "1.0" : "0.2" }}></div>
                        <p className="text-[1rem] text-[#747067] leading-[1.6875rem]"> Same as shipping address </p>
                    </button>
                    <button className="flex items-center h-[3rem]" onClick={() => { onOptionchaged(2) }}>
                        <div className="rounded-full min-w-[1.25rem] h-[1.25rem] mr-[1rem] border-[#996D01]" style={{ borderWidth: billingAddrOption == 2 ? "5px" : "1px", opacity: billingAddrOption == 2 ? "1.0" : "0.2" }}></div>
                        <p className="text-[1rem] text-[#747067] leading-[1.6875rem]"> Use a different billing address </p>
                    </button>
                </div>
                {billingAddrOption == 2 &&
                    <div className="flex flex-col">
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
                                <input type="text" value={_zipcode?.value} onChange={(e) => { onChangeUserInfo("zipcode", e.target.value) }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Zipcode" />
                            </div>
                        </div>
                        <div className="flex mb-[1.5rem]">
                            <input type="text" value={_phone.value} onChange={(e) => { onChangeUserInfo("phone", e.target.value) }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Phone" />
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}
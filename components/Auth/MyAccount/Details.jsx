import { useAuth } from "store/hook";
import { useState, useEffect, useRef } from "react"
import Image from "next/image";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faUpload, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import CountrySelector from "components/utils/Buttons/CountrySelector";
import StateSelector from "components/utils/Buttons/StateSelector";
import stateList from "../../../config/CountryData";
import { setAvatar, login } from "store/slices/authSlice";
import { useDispatch } from "react-redux";
import AUTH_API from "api/Auth";
import { toast } from 'react-toastify';

export default function Details() {
    const dispatch = useDispatch();
    const { firstName, lastName, phone, email, address, avatar, userId, country, state, city, apartment, zipcode } = useAuth();

    const [image, setImage] = useState(null);
    const [uploadedImageURL, setUploadedURL] = useState("");
    const imageInput = useRef(null)

    const [updatedFields, setUpdatedFields] = useState([])

    const [_country, setCountry] = useState(country ? country : { "value": "US", "group": "U", "text": "United States" });
    const [_state, setState] = useState(state ? state : { abbreviation: "AL", name: "Alabama", country: "US" });

    const [_firstName, setFirstName] = useState({
        value: firstName, error: '', newValue: firstName,
    });
    const [_lastName, setLastName] = useState({
        value: lastName, error: '', newValue: lastName,
    });
    const [_email, setEmail] = useState({
        value: email, error: '', newValue: email,
    });
    const [_city, setCity] = useState({
        value: address, error: '', newValue: address,
    });
    const [_apartment, setApartment] = useState({
        value: address, error: '', newValue: address,
    });
    const [_address, setAddress] = useState({
        value: address, error: '', newValue: address,
    });
    const [_zipcode, setZipcode] = useState({
        value: zipcode, error: '', newValue: zipcode,
    });
    const [_phone, setPhone] = useState({
        value: phone, error: '', newValue: phone,
    });

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setUploadedURL(URL.createObjectURL(i));
        }
    };

    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", image);
        body.append("userId", userId);
        const response = await fetch("/api/file/avatar", {
            method: "POST",
            body
        });
        const res = await response.text();
        return JSON.parse(res).filename;
    };

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

    const onSaveDetails = async () => {
        if(updatedFields.length > 0) {
            const res = await AUTH_API.setDetails({
                userId, 
                country: _country,
                state: _state,
                city: _city.value,
                apartment: _apartment.value,
                address: _address.value,
                zipcode: _zipcode.value,
                phone: _phone.value
            })
            const user = res.data;

            dispatch(login({
                logined: true,
                fullname: `${user.first_name} ${user.last_name}`,
                firstName: user.first_name,
                lastName: user.last_name,
                phone: user.phone,
                email: `${user.email}`,
                avatar: user.avatar,
                userId: user.id,
                country: user.country,
                state: user.state,
                city: user.city,
                apartment: user.apartment,
                address: user.address,
                zipcode: user.zipcode,
                token: user.token,
                role: user.role,
            }))

            toast.success('Account updated', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const onSaveAvatar = async () => {
        try {
            const avatar = await uploadToServer();
            dispatch(setAvatar({ avatar }));
            setUploadedURL("");
        } catch (e) {

        }
    }

    const onDeleteAvatar = async () => {
        setUploadedURL("")
    }
    return (
        <div className="bg-white rounded-[1rem] px-[1.125rem] py-[1rem] flex flex-col h-fit grow">
            <div className="flex flex-col">
                <div className="flex">
                    <div className="flex flex-col grow">
                        <h6 className="text-[1.5rem] leading-[2.25rem] font-bold text-primary my-[2rem]"> Account Details </h6>
                        <div className="flex flex-col md:flex-row mb-[1.5rem]">
                            <div className="grow pr-[0px] md:pr-[0.75rem] mb-[1.5rem] md:mb-[0rem]">
                                <input type="text" value={_firstName.value} onChange={(e) => { onChangeUserInfo("firstname", e.target.value) }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="First Name" />
                            </div>
                            <div className="grow pl-[0px] md:pl-[0.75rem]">
                                <input type="text" value={_lastName.value} onChange={(e) => { onChangeUserInfo("lastname", e.target.value) }} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Last Name" />
                            </div>
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
                        <div className="flex mb-[2rem]">
                            <input type="email" value={_email.value} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Email" readOnly />
                        </div>

                        <div className="flex justify-end">
                            <button className="w-fit h-[3rem] rounded-full bg-[#996D01] disabled:bg-[#BCB9B3] px-[24px] text-white text-[1rem] mb-[2rem]" 
                            disabled={updatedFields.length == 0} 
                            onClick={onSaveDetails}
                            > Save changes </button>
                        </div>

                        <h6 className="text-[1.5rem] leading-[2.25rem] font-bold text-primary my-[2rem]"> Change Password </h6>
                        <div className="flex mb-[1.5rem]">
                            <input type="password" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Old password" />
                        </div>
                        <div className="flex mb-[1.5rem]">
                            <input type="password" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="New password" />
                        </div>
                        <div className="flex mb-[2rem]">
                            <input type="password" className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Repeat password" />
                        </div>

                        <div className="flex justify-end">
                            <button className="w-fit h-[3rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem] mb-[2rem]"> Save changes </button>
                        </div>

                    </div>
                    <div className="w-fit flex flex-col pl-[1rem] items-center mt-[6.125rem]">
                        <div className="w-[16rem] h-[16rem] overflow-hidden relative rounded-[0.5rem]">
                            {avatar &&
                                <Image src={uploadedImageURL ? uploadedImageURL : avatar} layout="fill" objectFit="cover" />
                            }
                        </div>
                        <div className="flex justify-center items-center">

                            {!uploadedImageURL &&
                                <button className="w-fit mt-[1rem] mx-[0.25rem] h-[3rem] rounded-full bg-[#e0e0e0] text-primary hover:px-[1.675rem] px-[1.5rem] text-black text-[1rem] hover:shadow transition-all duration-300 flex items-center"
                                    onClick={(e) => { imageInput.current.click(); }}
                                >
                                    <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                                        {/* <Image alt="" src="/images/momento.png" width={24} height={24} /> */}
                                        <FontAwesomeSvgIcon width={24} height={24} icon={faUpload} />
                                    </div>
                                    <p className="font-bold"> Upload Image </p>
                                    <input ref={imageInput} type="file" name="myImage" onChange={uploadToClient} hidden accept=".jpg,.jpeg,.png,.svg,.webp,.mp4,.mp3,.avi,.mpg" />

                                </button>
                            }
                            {uploadedImageURL &&
                                <button className="w-[7.5rem] mt-[1rem] mx-[0.25rem] h-[3rem] rounded-full bg-primary text-white px-[1.5rem] text-black text-[1rem] hover:shadow flex items-center justify-center"
                                    onClick={onSaveAvatar}
                                >
                                    <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                                        {/* <Image alt="" src="/images/momento.png" width={24} height={24} /> */}
                                        <FontAwesomeSvgIcon width={24} height={24} icon={faSave} />
                                    </div>
                                    <p className="font-bold"> Save </p>
                                </button>
                            }
                            {uploadedImageURL &&
                                <button className="w-[7.5rem] mt-[1rem] mx-[0.25rem] h-[3rem] rounded-full bg-[#e0e0e0] text-primary px-[1.5rem] text-black text-[1rem] hover:shadow flex items-center justify-center"
                                    onClick={onDeleteAvatar}
                                >
                                    <div className='w-[24px] h-[24px] flex items-center mr-[0.5rem]'>
                                        {/* <Image alt="" src="/images/momento.png" width={24} height={24} /> */}
                                        <FontAwesomeSvgIcon width={24} height={24} icon={faTrash} />
                                    </div>
                                    <p className="font-bold"> Delete </p>
                                </button>
                            }

                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
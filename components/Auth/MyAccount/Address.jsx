import { useState } from "react";

export default function Address() {
    const [isEditMode, setEditMode] = useState(false)
    const [firstName, setFirstName] = useState({
        value: '', error: '', newValue: '',
    });
    const [lastName, setLastName] = useState({
        value: '', error: '', newValue: '',
    });
    const [address, setAddress] = useState({
        value: '', error: '', newValue: '',
    });
    const [apartment, setApartment] = useState({
        value: '', error: '', newValue: '',
    });
    const [phone, setPhone] = useState({
        value: '', error: '', newValue: '',
    });
    const [city, setCity] = useState({
        value: '', error: '', newValue: '',
    });
    const [country, setCountry] = useState({
        value: '', error: '', newValue: '',
    });
    const [state, setState] = useState({
        value: '', error: '', newValue: '',
    });
    const [zipcode, setZipcode] = useState({
        value: '', error: '', newValue: '',
    });

    const openEditMode = () => {
        setFirstName({...firstName, newValue: firstName.value});
        setLastName({...lastName, newValue: lastName.value});
        setAddress({...address, newValue: address.value});
        setApartment({...apartment, newValue: apartment.value});
        setPhone({...phone, newValue: phone.value});
        setCity({...city, newValue: city.value});
        setCountry({...country, newValue: country.value});
        setState({...state, newValue: state.value});
        setZipcode({...zipcode, newValue: zipcode.value});
    }

    const cancelEditMode = () => {
        setEditMode(false);
    }

    const saveChanges = async () => {
        setFirstName({...firstName, value: firstName.newValue});
        setLastName({...lastName, value: lastName.newValue});
        setAddress({...address, value: address.newValue});
        setApartment({...apartment, value: apartment.newValue});
        setPhone({...phone, value: phone.newValue});
        setCity({...city, value: city.newValue});
        setCountry({...country, value: country.newValue});
        setState({...state, value: state.newValue});
        setZipcode({...zipcode, value: zipcode.newValue});

        setEditMode(false)
    }

    return (
        <div className="bg-white rounded-[1rem] px-[1.125rem] py-[1rem] flex flex-col h-fit grow">
            <h6 className="text-[1.5rem] leading-[2.25rem] font-bold text-primary mb-[1rem]"> Orders </h6>
            <p className="text-[1rem] leading-[1.375rem] text-[#BEB8A4] mb-[0.5rem]"> Billing Adress </p>
            <button className="text-[1rem] leading0[1.375rem] text-[#0FAFE9] w-fit mb-[2rem]" disabled={isEditMode}
                onClick={() => {setEditMode(true)}}
            > Edit </button>
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row mb-[1.5rem]">
                    <div className="grow pr-[0px] md:pr-[0.75rem] mb-[1.5rem] md:mb-[0rem]">
                        { isEditMode ?
                            <input type="text" value={firstName.newValue} onChange = {(e) => setFirstName({...firstName, newValue: e.target.value, error: ''})} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="First Name"/> : 
                            <p className="w-full h-[3rem] leading-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]">
                                { firstName.value }
                            </p>
                        }
                    </div>
                    <div className="grow pl-[0px] md:pl-[0.75rem]">
                        { isEditMode ?
                            <input type="text" value={lastName.newValue} onChange = {(e) => setLastName({...lastName, newValue: e.target.value, error: ''})} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Last Name"/> : 
                            <p className="w-full h-[3rem] leading-[3rem] leading-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]">
                                { lastName.value }
                            </p>
                        }
                    </div>
                </div>
                <div className="flex mb-[1.5rem]">
                    { isEditMode ?
                        <input type="text" value={address.newValue} onChange = {(e) => setAddress({...address, newValue: e.target.value, error: ''})} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Address"/> : 
                        <p className="w-full h-[3rem] leading-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]">
                            { address.value }
                        </p>
                    }
                </div>
                <div className="flex flex-col md:flex-row mb-[1.5rem]">
                    <div className="grow pr-[0px] md:pr-[0.75rem] mb-[1.5rem] md:mb-[0rem]">
                        { isEditMode ?
                            <input type="text" value={apartment.newValue} onChange = {(e) => setApartment({...apartment, newValue: e.target.value, error: ''})} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Apartment, suite, etc. (optional)"/> : 
                            <p className="w-full h-[3rem] leading-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]">
                                { apartment.value }
                            </p>
                        }
                    </div>
                    <div className="grow pl-[0px] md:pl-[0.75rem]">
                        { isEditMode ?
                            <input type="text" value={phone.newValue} onChange = {(e) => setPhone({...phone, newValue: e.target.value, error: ''})} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Phone Number"/> : 
                            <p className="w-full h-[3rem] leading-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]">
                                { phone.value }
                            </p>
                        }
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mb-[1.5rem]">
                    <div className="grow pr-[0px] md:pr-[0.75rem] mb-[1.5rem] md:mb-[0rem]">
                        { isEditMode ?
                            <input type="text" value={city.newValue} onChange = {(e) => setCity({...city, newValue: e.target.value, error: ''})} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="City"/> : 
                            <p className="w-full h-[3rem] leading-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]">
                                { city.value }
                            </p>
                        }
                    </div>
                    <div className="grow pl-[0px] md:pl-[0.75rem]">
                        { isEditMode ?
                            <input type="text" value={country.newValue} onChange = {(e) => setCountry({...country, newValue: e.target.value, error: ''})} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="Country"/> : 
                            <p className="w-full h-[3rem] leading-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]">
                                { country.value }
                            </p>
                        }
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mb-[1.5rem]">
                    <div className="grow pr-[0px] md:pr-[0.75rem] mb-[1.5rem] md:mb-[0rem]">
                        { isEditMode ?
                            <input type="text" value={state.newValue} onChange = {(e) => setState({...state, newValue: e.target.value, error: ''})} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="State"/> : 
                            <p className="w-full h-[3rem] leading-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]">
                                { state.value }
                            </p>
                        }
                    </div>
                    <div className="grow pl-[0px] md:pl-[0.75rem]">
                        { isEditMode ?
                            <input type="text" value={zipcode.newValue} onChange = {(e) => setZipcode({...zipcode, newValue: e.target.value, error: ''})} className="w-full h-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]" placeholder="ZIP Code"/> : 
                            <p className="w-full h-[3rem] leading-[3rem] px-[10px] text-[1rem] outline-none border-[1px] border-[#D4D4D4] rounded-[4px]">
                                { zipcode.value }
                            </p>
                        }
                    </div>
                </div>

                { isEditMode && 
                    <div className="flex flex-col md:flex-row justify-end items-center mb-[1.5rem]">
                        <button className="w-full md:w-fit h-[3rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem] mb-[1rem] md:mb-[0px] md:mr-[1.5rem]"
                            onClick={() => { cancelEditMode() }}
                        > Cancel </button>
                        <button className="w-full md:w-fit h-[3rem] rounded-full bg-[#996D01] px-[24px] text-white text-[1rem]"
                            onClick={() => { saveChanges() }}
                        > Save changes </button>
                    </div>
                }
            </div>
        </div>
    )
}
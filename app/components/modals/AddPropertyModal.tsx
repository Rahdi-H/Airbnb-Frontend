"use client";

import useAddProperty from "@/app/hooks/useAddProperty";
import Modal from "./Modal";
import { ChangeEvent, useState } from "react";
import Catagories from "../addproperty/Catagories";
import SelectCountry, {SelectCountryValue} from "../SelectCountries";
import Image from "next/image";
import apiServices from "@/app/services/apiServices";
import { useRouter } from "next/navigation";

const AddPropertyModal = () => {
    const addPropertyModal = useAddProperty()
    const router = useRouter()
    const [errors, setErrors] = useState<string[]>([])
    const [currentStep, setCurrentStep] = useState(1)
    const [dataCatagory, setDataCatagory] = useState('')
    const [dataTitle, setDataTitle] = useState('')
    const [dataDescription, setDataDescription] = useState('')
    const [pricePerNight, setPricePerNight] = useState('')
    const [bedrooms, setBedrooms] = useState('')
    const [bathrooms, setBathrooms] = useState('')
    const [guests, setGuests] = useState('')
    const [dataCountry, setDataCountry] = useState<SelectCountryValue>()
    const [dataImage, setDataImage] = useState<File | null>(null)
    const settingCatagory = (catagory:string) => {
        setDataCatagory(catagory)
    }
    const setImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const tmpImage = event.target.files[0];
            setDataImage(tmpImage)
        }
    }
    const submitForm = async () => {
        console.log('Submitting Form');
        if (
            dataCatagory &&
            dataTitle &&
            dataDescription &&
            pricePerNight &&
            bedrooms &&
            bathrooms &&
            guests &&
            dataCountry &&
            dataImage 
        ) {
            const formData = new FormData();
            formData.append("category", dataCatagory);
            formData.append('title', dataTitle);
            formData.append('description', dataDescription);
            formData.append('price_per_night', pricePerNight);
            formData.append('bedrooms', bedrooms);
            formData.append('bathrooms', bathrooms);
            formData.append('guests', guests);
            formData.append('country', dataCountry.label);
            formData.append('country_code', dataCountry.value);
            formData.append('image', dataImage);
            const response = await apiServices.post('/api/properties/create/', formData)
            if (response.success) {
                console.log("succeded in creating new data");
                addPropertyModal.close()
                router.push('/')   
            } else {
                console.log("Error occured");
                const tmpError: string[] = Object.values(response).map((error: any)=> {
                    return error
                })
                setErrors(tmpError)
            }
        }
        
    }
    const useaddproperty= useAddProperty()
    const content = (
        <>
            {currentStep == 1? (
                <>
                    <h2 className="mb-6 text-xl">Choose Category</h2>
                    <Catagories dataCatagory={dataCatagory} setCatagory={(catagory)=> settingCatagory(catagory)} />
                    <button onClick={() => setCurrentStep(2)} className="p-3 rounded-full bg-airbnb hover:bg-airbnb-dark text-white">Next</button>
                </>
            ): currentStep == 2 ? ( 
                <>
                    <h2 className="mb-6 text-xl">Description</h2>
                    <div className="flex flex-col py-5  gap-3">
                        <label htmlFor="">Title</label>
                        <input value={dataTitle} onChange={(e)=> setDataTitle(e.target.value)} type="text" placeholder="Enter Title" className="p-4 rounded-full border focus:outline-airbnb" />
                        <label htmlFor="">Description</label>
                        <textarea value={dataDescription} onChange={(e)=> setDataDescription(e.target.value)} placeholder="Description here" className="p-4 rounded-xl h-[200] border focus:outline-airbnb" />
                    </div>
                    <button onClick={() => setCurrentStep(1)} className="p-3 mx-2 rounded-full bg-black hover:bg-gray-500 text-white">Previous</button>
                    <button onClick={() => setCurrentStep(3)} className="p-3 mx-2 rounded-full bg-airbnb hover:bg-airbnb-dark text-white">Next</button>
                </>
            ): currentStep == 3 ? (
                <>
                    <h2 className="mb-6 text-xl">Details</h2>
                    <div className="flex flex-col py-5  gap-3">
                        <label htmlFor="">Price per night</label>
                        <input value={pricePerNight} onChange={(e)=> setPricePerNight(e.target.value)} type="text" placeholder="Price per night" className="p-4 rounded-full border focus:outline-airbnb" />
                        <label htmlFor="">Bedrooms</label>
                        <input value={bedrooms} onChange={(e)=> setBedrooms(e.target.value)} type="text" placeholder="Number of Bedrooms" className="p-4 rounded-full border focus:outline-airbnb" />
                        <label htmlFor="">Bathrooms</label>
                        <input value={bathrooms} onChange={(e)=> setBathrooms(e.target.value)} type="text" placeholder="Number of Bathrooms" className="p-4 rounded-full border focus:outline-airbnb" />
                        <label htmlFor="">Guests</label>
                        <input value={guests} onChange={(e)=> setGuests(e.target.value)} type="text" placeholder="Number of guests" className="p-4 rounded-full border focus:outline-airbnb" />
                    </div>
                
                    <button onClick={() => setCurrentStep(2)} className="p-3 mx-2 rounded-full bg-black hover:bg-gray-500 text-white">Previous</button>
                    <button onClick={() => setCurrentStep(4)} className="p-3 mx-2 rounded-full bg-airbnb hover:bg-airbnb-dark text-white">Next</button>
                </>
            ): currentStep == 4 ? (
                <>
                    <h2 className="mb-6 text-xl">Location</h2>
                    <SelectCountry value={dataCountry} onChange={(value) => setDataCountry(value as SelectCountryValue)} />
                    <button onClick={() => setCurrentStep(3)} className="p-3 mx-2 rounded-full bg-black hover:bg-gray-500 text-white">Previous</button>
                    <button onClick={() => setCurrentStep(5)} className="p-3 mx-2 rounded-full bg-airbnb hover:bg-airbnb-dark text-white">Next</button>
                </>
            ): (
                <>
                    <h2 className="mb-6 text-xl">Location</h2>
                    <input type="file" accept="image/*" onChange={setImage} className="block mb-6"/>
                    {dataImage && (
                        <div className="h-[200px] w-[150] relative py-4">
                            <Image width={150} height={200} className="h-full w-full object-cover rounded-xl" src={URL.createObjectURL(dataImage)}  alt="Uploaded Image"/>
                        </div>
                    )}
                    {errors.map((error, index) => {
                    return (
                        <div key={index} className="p-3 rounded-full bg-airbnb hover:bg-airbnb-dark text-white">
                            {error}
                        </div>
                    )
                })}
                    <button onClick={() => setCurrentStep(4)} className="p-3 mx-2 rounded-full bg-black hover:bg-gray-500 text-white">Previous</button>
                    <button onClick={submitForm} className="p-3 mx-2 rounded-full bg-airbnb hover:bg-airbnb-dark text-white">Submit</button>
                </>
            )}
        </>
    )
    return (
        <>
            <Modal 
                title="Add Property"
                content={content}
                close={useaddproperty.close}
                isOpen={useaddproperty.isOpen}
            />
        </>
    )
}

export default AddPropertyModal;
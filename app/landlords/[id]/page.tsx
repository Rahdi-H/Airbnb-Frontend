import PropertyList from '@/app/components/properties/PropertyList';
import apiServices from '@/app/services/apiServices';
import Image from 'next/image';
import React from 'react'

async function LandlordPage({params}: {params: {id: string}}) {
    const landlord = await apiServices.get(`/api/auth/${params.id}/`)
    console.log(landlord);
    
  return (
    <main className="max-w-[1500px] mx-auto px-6 py-5">
        <div className='grid md:grid-cols-4 grid-cols-1 gap-8'>
            <aside className='col-span-1 h-[50vh] border border-gray-300 rounded-xl shadow-xl flex flex-col justify-center items-center'>
                <div className='w-full justify-center flex items-center'>
                    <Image 
                        src={'/properties/p1.jpg'}
                        width={200}
                        height={200}
                        className='object-cover rounded-full w-36 h-36 mt-5'
                        alt='Landlord image'
                    />
                </div>
                <h1 className='text-xl font-bold my-4'>{landlord.name}</h1>
                <button className='bg-airbnb hover:bg-airbnb-dark text-white px-5 py-3 rounded-md mb-4'>Contact</button>
            </aside>
            <div className='col-span-1 md:col-span-3 '>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <PropertyList landlord_id={landlord.id}/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default LandlordPage;
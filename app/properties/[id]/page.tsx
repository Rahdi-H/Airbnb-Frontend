import Reservation from '@/app/components/properties/Reservation';
import { getUserID } from '@/app/lib/actions';
import apiServices from '@/app/services/apiServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function PropertyDetailPage({params}: {params: {id: string}}) {
    const property = await apiServices.get(`/api/properties/${params.id}`)
    const userID = await getUserID()
  return (
    <main className='max-w-[1500px] mx-auto px-6 mt-4'>
        <div className='w-full h-[64vh] relative rounded-xl overflow-hidden mb-4'>
            <Image 
                fill
                src={property.image_url}
                className='object-cover h-full w-full'
                alt='Property Image'
            />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mt-6'>
            <div className='col-span-3'>
                <h1 className='text-2xl mb-4'>{property.title}</h1>
                <p className='mb-4 text-gray-500'>{property.guests} Guests - {property.bedrooms} Bedrooms - {property.bathrooms} Bathrooms</p>
                <hr />
                <Link href={`/landlords/${property.landlord.id}`} className='mt-4 flex items-center gap-5 mb-4'>
                    {property.landlord.avatar_url && 
                        <Image
                        src={property.landlord.avatar_url}
                        width={150}
                        height={150}
                        className='rounded-full w-16 h-16'
                        alt='Landlord'
                        />
                    }
                    <span className='text-xl font-bold'>{property.landlord.name}</span>
                    <span className='text-gray-500'>Your host</span>
                </Link>
                <hr/>
                <p className='my-4'>{property.description}</p>
            </div>
            <div className='col-span-2'>
                <Reservation userID={userID} property={property}/>
            </div>
        </div>
    </main>
  )
}

export default PropertyDetailPage;
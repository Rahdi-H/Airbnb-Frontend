import Image from 'next/image';
import React from 'react'
import { PropertyType } from './PropertyList';
import { useRouter } from 'next/navigation';
import apiServices from '@/app/services/apiServices';
interface propertyprops {
    property: PropertyType
}
const PropertyItem: React.FC<propertyprops> = ({
    property
}) => {
    const router = useRouter()
    const send = () => {
        router.push(`/properties/${property.id}`)
    }
  return (
    <div className='cursor-pointer' onClick={send}>
        <div className='relative overflow-hidden aspect-square rounded-xl'>
            <Image
                fill
                src={property.image_url}
                sizes="(max-width: 768px) 768px, (max-width:  1200px): 768px, 768px"
                className=' object-cover transition h-full w-full hover:scale-110'
                alt='Property image'
            />
        </div>
        <div className='mt-2'>
            <p className='text-lg font-bold'>{property.title}</p>
        </div>
        <div className='mt-2'>
            <p className='text-sm text-gray-500'><strong>${property.price_per_night}</strong> Per night</p>
        </div>
    </div>
  )
}

export default PropertyItem;